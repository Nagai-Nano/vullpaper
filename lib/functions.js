const imgExtRegex = /(jpg|png|jpeg|gif)$/i;

const filterDataFields = data =>
  data.reduce((acc, cur) => {
    const { file_ext, preview_file_url } = cur;

    if (imgExtRegex.test(file_ext) && preview_file_url) {
      acc.push({
        id: cur.id,
        uri: cur.file_url.split('/').slice(-1)[0],
        preview: preview_file_url
      });
    }

    return acc;
  }, []);

const getDate = n => {
  const today = new Date();
  const targetDate = new Date(today.setDate(today.getDate() - n));
  const formattedDate = targetDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const [month, day, year] = formattedDate.split('/');
  return [year, month, day].join('-');
};

module.exports = {
  filterDataFields,
  getDate
};
