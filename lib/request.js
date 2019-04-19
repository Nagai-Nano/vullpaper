const request = require('request');

const rp = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    return request(url, { ...options, json: true }, (error, response, body) => {
      if (error) return reject(error);
      return resolve({ response, body });
    });
  });
};

module.exports = rp;
