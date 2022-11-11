import { useState, useEffect } from 'react';
// import ImgLoading from "./ImgLoading";
import {API} from "../config";
import {NavLink} from "react-router-dom";

const ViewPhoto = (props) => {
  // category -> 현재 카테고리
  // list -> 카테고리 전체 리스트

  const {category, list} = props;
  // const [delay, setDelay] = useState(true);

  // 이미지 미리 로딩해서 캐시로 가져오게 함 (이미지 새로 로드할 경우 깜빡거림 해결)
  const imagePreload = (urls) => {
    urls.forEach((url) => {
      for (let i=1; i<=6; i++) {
        const img = new Image();
        img.src = `${API.IMAGE}/${url}/img${i}.jpg`;
      }
    });
  }

  useEffect(() => {
    imagePreload(list);
  }, [category]);

  // 로딩 화면 추가
  // // 500ms 동안 로딩 화면을 보여주고, 그 뒤에 화면을 그림
  // useEffect(() => {
  //   const timer = setTimeout(() =>
  //     setDelay(false), 500
  //   );

  //   return () => {
  //     clearTimeout(timer)
  //     setDelay(true);
  //   }
  // },[category]);


  const showPic = (list) => {
    // if (delay) return <ImgLoading />

    return (
      <>
        <div className='main-content01-pic'>
          {
            list.map((cate, i) => {
              const url = `${API.IMAGE}/${category}/img${i+1}.jpg`
              return (
                <div className='main-pictures' key={i}>
                  <img src={url} alt='image' />
                </div>
              )
            })
          }
        </div>
        <div className='main-content01-more'>
          <NavLink to="/photos">
            <img src={`${API.IMAGE}/seemore-btn.png`} alt="더보기"/>
          </NavLink>
        </div>
      </>
    )
  }

  return (
    <>
      { showPic(list) }
    </>
  )
}

export default ViewPhoto;