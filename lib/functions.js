const imgExtRegex = /(jpg|png|jpeg|gif)$/i;

const filterDataFields = data =>
  data.reduce((acc, cur) => {
    const { file_ext, preview_file_url } = cur;

    if (imgExtRegex.test(file_ext) && preview_file_url) {
      acc.push({
        id: cur.id,
        created: cur.created_at,
        tags: cur.tag_string,
        url: cur.file_url,
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
