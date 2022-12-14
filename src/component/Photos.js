import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {API} from '../config'
import Category from './Category';

const Photos = ({cateList}) => {
    // category : 현재 카테고리
    // cateList : 전체 카테고리 리스트

    const [category, setCategory] = useState('jeju');   // 현재 카테고리
    const [list, setList]         = useState([]);
    // const [count, setCount]       = useState(0);    // 현재 개수
    let count = 0;   // 현재 개수
    let more = 0;    // 더보기

    const clickHandler = (name) => setCategory(name);
    
    // Mount
    useEffect(()=>{
        getList();
        console.log("list : " + list);
        count += 6;
    }, [])

    // useEffect(()=>{
    //     console.log("count useEffect : " + count);
    // }, [count])

    useEffect(()=>{
        more = 0;
    }, [category])

    // 사진 데이터 불러오는 함수
    const getList = (body) => {

        let url;

        switch(more){
            case 0 :
             url = 'test0.json';
             break;
            case 1 :
             url = 'test1.json';
             break;
            case 2 : 
             url = 'test2.json';
             break;
            default :
              url = 'test2.json';
              break;
        }

        axios.get(`${API.PHOTOJSON}/${url}`).then((response) => {
            const data = response.data[`${category}`];
            console.log("axios arr : " + data);

            setList([...list, ...data]);
        });
      };

    return(
        <>
        <div className='main-block-top page-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>

            <Category list={cateList} clickHandler={clickHandler} />
            
            <ImageData list={list} setList={setList} category={category}/>
            
            </div>
            {count < 15 ? 
            <button onClick={()=>{
               
                more += 1;
                console.log("more : " + more);

                let body = {
                    loadMore: true
                };
                
                if(more == 1){
                    count += 6;
                }else if(more == 2){
                    count += 3;
                }
                console.log("count : " + count);

                getList(body);
            
            }}>
                <img className='btn_seemore' src={require('../img/seemore-btn.png')} alt="더보기" />
            </button>
            : '' }
            </div>
        </div>

        <Footer />
        
        </>
    )
}

const ImageData = ({list, setList, category}) => {

    return(
        <>
        {
            list.map(function(a, i){
                const url = `${API.IMAGE}/${category}/${list[i].img}`;

                return(
                <div className='main-pictures width100' key={i}>
                    <img src={url} alt="image" />
                </div>
                )
            })
        }
        </>
    )
}

export default Photos;