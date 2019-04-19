const request = async (url, blob = false) => {
  const response = await fetch(`/api${url}`);
  const data = (await blob) ? response.blob() : response.json();

  return data;
};

export default request;
