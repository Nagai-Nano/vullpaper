const express = require('express');
const router = express.Router();

const { catchErrors } = require('../lib/errorHandlers');
const { rp } = require('../lib/request');
const { filterDataFields } = require('../lib/functions');

const API_HOST = process.env.API_HOST;

router.get(
  '/',
  catchErrors(async (req, res, next) => {
    const { page = 1, limit = 5 } = req.query;
    if (isNaN(page) || isNaN(limit))
      return next({ message: 'Invalid Parameters' });

    const { body: tags } = await rp(
      `${API_HOST}/tags.json?search[category]=3&search[order]=count&search[hide_empty]=yes&limit=${limit}&page=${page}`
    );

    if (!tags) return res.json({ tags: [], hasMore: false });

    const imagesPerTag = await Promise.all(
      tags.map(({ name }) =>
        rp(
          `${API_HOST}/posts.json?tags=${encodeURIComponent(name)}&limit=${12}`
        )
      )
    );

    const results = tags.map(({ id, name, post_count }, index) => ({
      id,
      name,
      count: post_count,
      images: filterDataFields(imagesPerTag[index].body)
    }));

    res.json({
      tags: results,
      hasMore: !!tags.length
    });
  })
);

module.exports = router;
