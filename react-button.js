const { useState } = React;

function DogFetcher() {
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);
    setImgUrl(null);

    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      if (data.status === 'success') {
        setImgUrl(data.message);
      }
    } catch (err) {
      alert('エラーが発生しました');
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchDog}>画像を取得（React）</button>
      {loading && <p>読み込み中...</p>}
      {imgUrl && <img src={imgUrl} alt="わんこ画像" style={{ marginTop: '10px', maxWidth: '100%' }} />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<DogFetcher />);
