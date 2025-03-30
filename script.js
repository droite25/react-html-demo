const btn = document.getElementById('fetch-btn');
const imageArea = document.getElementById('dog-image-area');

btn.addEventListener('click', async () => {
  imageArea.innerHTML = '読み込み中...';

  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    if (data.status === 'success') {
      imageArea.innerHTML = `<img src="${data.message}" alt="わんこ画像" />`;
    } else {
      imageArea.innerHTML = '画像の取得に失敗しました';
    }
  } catch (error) {
    imageArea.innerHTML = 'エラーが発生しました';
    console.error(error);
  }
});
