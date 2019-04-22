const express = require('express');
const router = express.Router();

const { catchErrors } = require('../lib/errorHandlers');
const { rp, download } = require('../lib/request');
const { getRandomTags } = require('../lib/functions');

const API_HOST = process.env.API_HOST;

router.get(
  '/download',
  catchErrors(async (req, res) => {
    const { uri } = req.query;
    if (!uri) return next({ message: 'Invalid Parameters' });

    await download(res, uri);
  })
);

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
      relatedTags: getRandomTags(
        image.tag_string_character ||
          image.tag_string_copyright ||
          image.tag_string_general
      ),
      artist: image.tag_string_artist,
      uri: image.file_url.split('/').slice(-1)[0],
      large: image.large_file_url.split('/').slice(-1)[0]
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
