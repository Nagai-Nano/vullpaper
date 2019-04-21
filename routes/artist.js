const express = require('express');
const router = express.Router();

const { catchErrors } = require('../lib/errorHandlers');
const rp = require('../lib/request');

const API_HOST = process.env.API_HOST;

router.get(
  '/',
  catchErrors(async (req, res, next) => {
    const { name } = req.query;
    if (!name) return next({ status: 400, message: 'Invalid Parameter' });

    const { body } = await rp(`${API_HOST}/artists.json?search[name]=${name}`);

    if (!body.length) return res.json({});

    const urls = body[0].urls.reduce((acc, cur) => {
      if (cur.url.includes('/stacc/') || cur.url.includes('/intent/user')) {
        return acc;
      }

      acc.push({
        id: cur.id,
        url: cur.url
      });

      return acc;
    }, []);

    res.json({
      name: body[0].name,
      urls
    });
  })
);

module.exports = router;
