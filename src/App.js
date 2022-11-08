import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, json, useNavigate, Link, NavLink } from 'react-router-dom';
import Nav from './component/Nav';
import Loading from './component/Loading';
import ScrollOut from "scroll-out";
import photoData from './photo';
import styled from 'styled-components';
import About from './component/About';
import Photos from './component/Photos';
import Seen from './component/Seen';
import Footer from './component/Footer';
import axios from 'axios';
import ScrollTop from './component/ScrollTop';

function App() {

  let navigate = useNavigate(); // <Link>

  const [ready, setReady] = useState(true);   // 랜딩페이지
  const [photo, setPhoto] = useState('jeju'); // 현재 카테고리 저장

  let cate = Object.keys(photoData); // 사진 카테고리
  const ViewPhoto = lazy(() => import('./component/ViewPhoto.js'));  

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


// const getGroupList = async () => {
//   await axios
//     .get('/photo.json')
//     .then((res) => console.log("res : " + res.data.jeju));
// };

  return (
    <>
    { ready && <Loading></Loading> }

    <Nav />

    {/* <Routes></Routes> // 라우트 적용하기 !! */}
     {/* * 경로는 이 외의 모든 경로를 의미 -> 404 페이지도 만들기 */}
    <ScrollTop />
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
            {
            cate.map(function(a, i){
              return (<div className='main-cate'> <div key={i} onClick={()=>{clickHandler(a)}}>{a}</div> {photo == a ? <div className='main-cate-active'></div>  : ''} </div> )
            })
            }  
          </div>

          {/* 사진 */}
          <div className='main-content01-pic'>
          <Suspense fallback={<div></div>}>
            <ViewPhoto photo={photo} cate={cate} photoData={photoData}/>
          </Suspense>
          </div>

          {/* 더보기 */}
          <div className='main-content01-more'>
            <NavLink to="/photos">
            <img className='btn_seemore' src={require('./img/seemore-btn.png')} alt="더보기"/>
            </NavLink>
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
      <Route path='/photos' element={<Photos cate={cate}/>} />
      <Route path='/seen' element={<Seen/>} />
    </Routes>

    </>
  );
}

export default App;