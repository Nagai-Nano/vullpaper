import router from '../router';

const request = async url => {
  const response = await fetch(`/api${url}`);
  const data = response.json();

  return data;
};

const requestTimeout = (url, timeout = 10000) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      return router.replace({ name: 'error', params: { code: 408 } });
    }, timeout);

    return request(url)
      .then(response => {
        clearTimeout(timeoutId);

        if (response.status >= 400) {
          return router.replace({
            name: 'error',
            params: { code: response.status }
          });
        }

        resolve(response);
      })
      .catch(error => {
        clearTimeout(timeoutId);
        return router.replace({
          name: 'error',
          params: { code: 500 }
        });
      });
  });
};

export default requestTimeout;
