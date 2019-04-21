const express = require('express');
const router = express.Router();

const { catchErrors } = require('../lib/errorHandlers');
const rp = require('../lib/request');

const API_HOST = process.env.API_HOST;

router.get(
  '/:id',
  catchErrors(async (req, res, next) => {
    const { id } = req.params;

    const { body: image } = await rp(`${API_HOST}/posts/${id}.json`);

    if (image.message || !Object.keys(image).length || !image.file_url)
      return next({ status: 404, message: 'Not found' });

    res.json({
      id: image.id,
      created: image.created_at,
      tags: image.tag_string,
      artist: image.tag_string_artist,
      ext: image.file_ext,
      url: image.file_url
    });
  })
);

router.get(
  '/:id/description',
  catchErrors(async (req, res, next) => {
    const { id } = req.params;

    const { body: desc } = await rp(
      `${API_HOST}/artist_commentaries.json?search[post_id]=${id}`
    );

    if (!desc.length) return res.json({});

    res.json({
      title: desc[0].original_title,
      description: desc[0].original_description
    });
  })
);

module.exports = router;
