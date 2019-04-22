const request = require('request');

const rp = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    return request(url, { ...options, json: true }, (error, response, body) => {
      if (error) return reject(error);
      return resolve({ response, body });
    });
  });
};

const download = async (res, uri) => {
  const type = uri.includes('sample-') ? 'data/sample' : 'data';

  res.setHeader('content-disposition', `attachment; filename=${uri}`);
  request(`${process.env.API_HOST}/${type}/${uri}`).pipe(res);
};

module.exports = {
  rp,
  download
};
