const express = require('express');
const router = express.Router();

const rp = require('../lib/request');
const { filterDataFields, getDate } = require('../lib/functions');

const API_HOST = process.env.API_HOST;

router.get('/:sort', async (req, res) => {
  const { sort } = req.params;
  const { page = 1, limit = 20 } = req.query;
  let endpoint = '';

  if (isNaN(page) || +page < 0 || +page > 1000)
    return res.json({ posts: [], hasMore: false });

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

  if (!body.length) return res.json({ posts: [], hasMore: false });

  const posts = filterDataFields(body);
  res.json({ posts, hasMore: true });
});

module.exports = router;
