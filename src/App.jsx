import './App.css';

function App() {
  return (
    <>
      <div className='w-window h-window center-box white-layer'>
        <span className='w-full center-box'>
          <span className='logo'>Yuka</span>
        </span>
        <span className='btn center-box'>
          <i className="fa-solid fa-play"></i>
        </span>
      </div>
      <video src="/train.mp4" type='video/mp4' controlsList="nodownload" onContextMenu={() => { return false; }} muted autoPlay loop className='movie'>
      </video>
    </>
  );
}

export default App;
