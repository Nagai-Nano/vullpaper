export const download = ({ uri }) => {
  let a = document.createElement('a');
  a.href = `/api/image/download?uri=${uri}`;
  a.download = uri;
  a.click();

  a = null;
};

export const heart = image => {
  alert('Đang phát triển tính năng này...');
};

export const link = ({ source }) => {
  if (!source) return alert('Không tìm thấy...');

  if (source.includes('https://i.pximg.net/')) {
    const illustId = source
      .split('/')
      .slice(-1)[0]
      .split('_')[0];

    source =
      'https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' +
      illustId;
  }

  window.open(source, '_blank');
};
