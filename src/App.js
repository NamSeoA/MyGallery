import './App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Loading from './component/Loading';
import ScrollOut from "scroll-out";
import photoData from './photo.json';
import About from './component/About';
import Seen from './component/Seen';
import Photos from './component/Photos';
import Footer from './component/Footer';
import ViewPhoto from './component/ViewPhoto';
import ScrollTop from './component/ScrollTop';
import axios from "axios";
import Category from './component/Category';

function App() {
  const [ready, setReady] = useState(false);   // 랜딩페이지

  const [data, setData] = useState(photoData);                // 데이터
  const [list, setList] = useState(Object.keys(photoData));   // 전체 카테고리 리스트
  const [category, setCategory] = useState('jeju');           // 현재 카테고리

  const clickHandler = (name) => setCategory(name);

  //photo.json 파일을 받아오면 data 와 list 값을 변경해 준다.
  useEffect (() => {
    const getGroupList = async () => {
      await axios
        .get('./photo.json')
        .then((res) => {
          setData(res.data)
          setList(Object.keys(res.data))
        })
    };

    getGroupList();
  },[]);

  useEffect(()=>{
    setTimeout(() => {
      setReady(false);
      }, 3000);
  }, []);

  ScrollOut({
    /* options */
  });

  return (
    <>
    { ready && <Loading /> }

    <Nav />

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

            <Category list={list} clickHandler={clickHandler} />
   
            {/* 사진 */}
            <div className='main-view-photo-container'>
              {
                <ViewPhoto
                  category={category}
                  list={list}
                />
              }
            </div>
          </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
              <path d="M13.38,33.31h47" transform='translate(-13.38 -32.81)'></path> </svg>
        </svg> */}
        </div>

        {/* bottom */}
        <div className='main-block' data-scroll>
          <div className='main-content01' />
        </div>

        {/* footer */}
        <Footer></Footer>

        </>
      } />
      <Route path='/about' element={<About/>} />
      <Route path='/photos' element={<Photos cateList={list}/>} />
      <Route path='/seen' element={<Seen/>} />
    </Routes>

    </>
  );
}

export default App;