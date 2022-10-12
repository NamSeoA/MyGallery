import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    {/* 1011 -> 반응형 css 정리하기 */}


    {/* Nav */}
    <div className='nav'>
      {/* 제목 */}
      <div className='nav-title'>
        <p>Seoa's film</p>
      </div >
      {/* 메뉴 */}
      <div className='nav-menu'>
        <div className='nav-menus'>목록</div>
        <div className='nav-menus'>상세</div>
        <div className='nav-menus'>리스트</div>
      </div>
    </div>

    <div className='main-block'>
      <div className='main-video'>
        
      </div>
    </div>
    

    <div className='main-block'>
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
