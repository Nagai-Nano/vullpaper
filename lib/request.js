const request = require('request');

const rp = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    return request(url, { ...options, json: true }, (error, response, body) => {
      if (error) return reject(error);
      return resolve({ response, body });
    });
  });
};

const download = async (res, { url, ext, id }) => {
  res.setHeader(
    'content-disposition',
    `attachment; filename=${id}.${url.split('.').slice(-1)[0]}`
  );

  request(url).pipe(res);
};

module.exports = {
  rp,
  download
};
