import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

    {/* Nav */}
    <div className='nav'>
      <div className='nav-center'>
      {/* 제목 */}
      <div className='nav-title'>
        <img src={require('./img/logo.png')} />
      </div >
      {/* 메뉴 */}
      <ul className='nav-menu'>
        <li className='nav-menus'>ABOUT</li>
        <li className='nav-menus'>LIST</li>
        <li className='nav-menus'>SEEN</li>
      </ul>
      </div>
    </div>
    
    <div className='main-block-top'>
      <div className='main-title'>
        <p className='main-title-1'>UNFORGETTABLE.</p>
        <p className='main-title-2'>Moments that pass by casually in a busy life, joyous and beautiful times, or inspired moments.<br/>
        I don't want that moments to be forgotten. That's why I left them in the film.</p>
      </div>
      <div className='main-video'>
        
      </div>
      <div className='main-line'>
        <hr className='main-line-hr' />
      </div>
    </div>
    

    <div className='main-block'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 1">
        <path d="M13.38,33.31h47" transform='translate(-13.38 -32.81)'></path>
      </svg>
      <div className='main-content01'>
        {/* 카테고리 */}
        <div className='main-content01-cate'>
          <p>카테고리</p>
          <p>카테고리</p>
          <p>카테고리</p>
          <p>카테고리</p>
          <p>카테고리</p>
        </div>

        {/* 사진 */}
        <div className='main-content01-pic'>

          {/* web:3 / mobile:2 */}
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
        </div>

        {/* 더보기 */}
        <div>
          <div>더보기</div>
        </div>
      </div>
    </div>

    <div className='main-block'>
      <div className='main-content01'>

      </div>
    </div>


    </>
  );
}

export default App;
