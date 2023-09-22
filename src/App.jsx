import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.oncontextmenu = function () { return false; }
  })
  return (
    <main>
      <div className='img_box'>
        <img src="https://avatars.githubusercontent.com/u/142193893?v=4" alt='user_icon' />
        <span className='img_title'>Yuka</span>
      </div>
      <div className='text'>
        Japanese🎌 vocational school student,<br />
        Majoring in information engineering.💻 <br />
        <b>Hobbies</b><i className="fa-solid fa-face-smile"></i><br />
        <i className='fa-solid fa-gamepad'></i>Playing Game<br />
        <i className='fa-solid fa-futbol'></i>Watching Football<br />
        <b>Codes</b><i className="fa-solid fa-code"></i><br />
        <i className="fa-brands fa-square-js"></i>JavaScript <br />
        <i className="fa-brands fa-python"></i>Python <br />
        <b>Contact</b><i className="fa-solid fa-comment"></i><br />
        <i className="fa-brands fa-discord"></i>Discord yuka66 DM me!<br />
        <i className="fa-brands fa-twitter"></i><a href="https://twitter.com/yuka_agar">Twitter</a><br />
        <i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/profile.php?id=100069525129725">Facebook</a><br />
      </div>
      <span className='star'>🌟</span>
    </main>
  );
}

export default App;
