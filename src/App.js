import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Loading from './component/Loading';
import ScrollOut from "scroll-out";

function App() {
  const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   // window.onbeforeunload = function pushRefresh() {
  //   //   window.scrollTo(0, 0);
  //   // };
  //   return() => {
  //     window.onbeforeunload = function () {
  //       window.scrollTo(0, 0);
  //   }
  //   }
  // });

  useEffect(()=>{

    setTimeout(() => {
      setReady(false);
  }, 3000);

  }, [])

  ScrollOut({
    /* options */
  });

  return (
    <>
    { ready && <Loading></Loading> }

    <Nav />
    
    {/* top */}
    <div className='main-block-top' >
      <div className='main-title' data-scroll>
        <p className='main-title-1' data-scroll>AT THIS MOMENT.</p>
        <p className='main-title-2' data-scroll>Moments that pass by casually in a busy life, joyous and beautiful times, or inspired moments.<br/>
        I don't want that moments to be forgotten. That's why I left them in the film.</p>
      </div>
      <div className='main-video' data-scroll>
        
      </div>
      <div className='main-line' data-scroll>
        <hr className='main-line-hr' />
      </div>
    </div>
    
    {/* middle */}
    <div className='main-block-middle' data-scroll>
      <div className='main-content01'>
        {/* 카테고리 */}
        <div className='main-content01-cate'>
          <div>카테고리</div>
          <div>카테고리</div>
          <div>카테고리</div>
          <div>카테고리</div>
          <div>카테고리</div>
        </div>

        {/* 사진 */}
        <div className='main-content01-pic'>
          {/* web:3 / mobile:2 */}
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          {/* <div className='main-pictures'></div>
          <div className='main-pictures'></div>
          <div className='main-pictures'></div> */}
          <div className='main-pictures add'></div>
          <div className='main-pictures add'></div>
          <div className='main-pictures add'></div>
        </div>

        {/* 더보기 */}
        <div className='main-content01-more'>
          <div>see more ></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 1">
        <path d="M13.38,33.31h47" transform='translate(-13.38 -32.81)'></path>
      </svg>
    </div>

    {/* bottom */}
    <div className='main-block' data-scroll>
      <div className='main-content01'>

      </div>
    </div>


    {/* footer */}


    </>
  );
}

export default App;