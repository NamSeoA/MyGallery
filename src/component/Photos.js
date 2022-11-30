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
    const [count, setCount]       = useState(0);

    const clickHandler = (name) => setCategory(name);
    
    // Mount
    useEffect(()=>{
        getList();
        console.log("list : " + list);
        setCount(count + 6);
    }, [])

    // 탭 변경 시 새로고침
    useEffect(()=>{

        //setList([]);
        //setCount(6);

    }, [category])

    useEffect(()=>{
        console.log("count : " + count);
    }, [count])

    // 사진 데이터 불러오는 함수
    const getList = (body) => {
        axios.get(`${API.JSON}`).then((response) => {
            const data = response.data[`${category}`];

            let arr = [];   // 사진 객체 담을 배열
            let img_data; 
            let num = [];

            if(count < 12){
                num = [1,2,3,4,5,6];
                
            }else{
                num = [1,2,3];
            }

            num.map((a, i) => {
                if(count >= 6){
                    i = i + count
                }

                img_data = data[i];
                arr.push(img_data);

            })

            setList([...list, ...arr]);

            // if (body.loadMore) {
                
            //     // 더보기 버튼이 클릭 됐을 시
            //     setList([...list, ...response.data.productInfo]);
            // } else {
            //   setList(response.data.productInfo);
            // }

        });

      };

    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>

            <Category list={cateList} clickHandler={clickHandler} />
            
            <ImageData count={count} setCount={setCount} list={list} setList={setList} category={category}/>
            
            </div>
            {count < 15 ? 
            <button onClick={()=>{
                let body = {
                    loadMore: true
                };
                
                if(count > 12){
                    setCount(count => count + 6);
                }else if(count == 12){
                    setCount( count => count + 3);
                }


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