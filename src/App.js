import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, json, useNavigate } from 'react-router-dom';
import Nav from './component/Nav';
import Loading from './component/Loading';
import ScrollOut from "scroll-out";
import photoData from './photo';
import styled from 'styled-components';
import About from './component/About';
import Photos from './component/Photos';
import Seen from './component/Seen';
import Footer from './component/Footer';

function App() {

  let navigate = useNavigate(); // <Link>

  const [ready, setReady] = useState(true);
  const [photo, setPhoto] = useState('jeju'); // 메인2 카테고리에 알맞는 사진

  let cate = Object.keys(photoData); // 사진 카테고리

  const clickHandler = (name) => {
    setPhoto(name);
  }

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

    {/* <Routes></Routes> // 라우트 적용하기 !! */}
     {/* * 경로는 이 외의 모든 경로를 의미 -> 404 페이지도 만들기 */}
    <Routes>
      <Route path='/' element={
        <>
        {/* top */}
        <div className='main-block-top' >
        <div className='main-title' data-scroll>
          <p className='main-title-1' data-scroll>AT THIS MOMENT.</p>
          <p className='main-title-2' data-scroll>Moments that pass by casually in a busy life, joyous and beautiful times, or inspired moments.<br/>
          I don't want that moments to be forgotten. That's why I left them in the film.</p>
        </div>
        <div className='main-video'>
          
        </div>
        <div className='main-line'>
          <hr className='main-line-hr' />
        </div>
        </div>

        {/* middle */}
        <div className='main-block-middle' data-scroll>
        <div className='main-content01'>
          {/* 카테고리 */}
          <div className='main-content01-cate'>
            {cate.map(function(a, i){
              return (<div className='main-cate'> <div key={a} onClick={()=>{clickHandler(a)}}>{a}</div> {photo == a ? <div className='main-cate-active'></div>  : ''} </div> )
            })}  
          </div>

          {/* 사진 */}
          <div className='main-content01-pic'>

            {
              cate.map(function(a, i){
                
                return <Viewphoto photo={photo} cate={cate} i={i} key={i} />
              })
            }

          </div>

          {/* 더보기 */}
          <div className='main-content01-more'>
            <div>see more ></div>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
              <path d="M13.38,33.31h47" transform='translate(-13.38 -32.81)'></path> </svg>
        </svg> */}
        </div>

        {/* bottom */}
        <div className='main-block' data-scroll>
        <div className='main-content01'>

        </div>
        </div>


        {/* footer */}
        <Footer></Footer>

        </>
      } />
      <Route path='/about' element={<About/>} />
      <Route path='/photos' element={<Photos/>} />
      <Route path='/seen' element={<Seen/>} />
    </Routes>

    </>
  );
}


/**
 * 동적 카테고리 탭
 * @param {photo, cate, i}  
 * @returns 
 * img 
 */
function Viewphoto({photo, cate, i}){

  let photo_result;
  let add;

  // const handleMouseOver = useCallback((e) => {
    
  //   if(e.currentTarget === e.target){
  //     e.target.classList.add('hover');
  //   }else{
  //     e.currentTarget.classList.remove('hover');
  //   }
  //   }
  // );

  if(photo == 'jeju'){
    photo_result = JSON.stringify(photoData.jeju);
  } else if(photo == 'memory'){
    photo_result = JSON.stringify(photoData.memory);
  } else if (photo == 'street'){
    photo_result = JSON.stringify(photoData.street);
  }else if (photo == 'sky'){
    photo_result = JSON.stringify(photoData.sky);
  }else if (photo == 'store'){
    photo_result = JSON.stringify(photoData.store);
  }else if (photo == 'japan'){
    photo_result = JSON.stringify(photoData.japan);
  }
  
  photo_result = JSON.parse(photo_result);

  if(i > 2){
    add = 'add'
  }else{
    add = ''
  }

  return(
    <div className={'main-pictures ' + add} ><img src={require('./img/'+photo_result[i].img)} /></div>
  )

}


export default App;