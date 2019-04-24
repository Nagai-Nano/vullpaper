const express = require('express');
const router = express.Router();

const { catchErrors } = require('../lib/errorHandlers');
const { rp } = require('../lib/request');
const { filterDataFields, getDate } = require('../lib/functions');

const API_HOST = process.env.API_HOST;

router.get(
  '/:sort',
  catchErrors(async (req, res, next) => {
    const { sort } = req.params;
    const { page = 1, limit = 20 } = req.query;
    let endpoint = '';

    if (isNaN(page) || +page < 1 || +page > 1000)
      throw Error('Invalid Parameters');

    switch (sort) {
      case 'newest':
        endpoint = `/posts.json?limit=${limit}&page=${page}`;
        break;
      case 'popular':
        endpoint = `/posts.json?tags=order:rank&limit=${limit}&page=${page}`;
        break;
      case 'views':
        const date = getDate(+page);
        endpoint = `/explore/posts/popular.json?date=${date}`;
        break;
      case 'random':
        endpoint = `/posts.json?random=true&limit=${limit}&page=${page}`;
        break;
      default:
        endpoint = `/posts.json?tags=${sort}&limit=${limit}&page=${page}`;
    }

    const { body } = await rp(`${API_HOST}${endpoint}`);

    if (!body.length) return next({ status: 404, message: 'Not Found' });

    const images = filterDataFields(body);
    res.json({ images, hasMore: true });
  })
);

module.exports = router;
