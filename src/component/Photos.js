import photoData from '../photo';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';
function Photos({cate}){

    let num = [15, 11, 8, 18, 16, 14];
    let listImg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let photoAll = [];
    let data;

    const [count, setCount] = useState(0);
    const [last, setLast] = useState(0); 

    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>
            
            <ImageData cate={cate} count={count} setCount={setCount}/>
            
            </div>
            <button onClick={()=>{
                setLast(last + 1);

            }}>더보기</button>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

const ImageData = ({i, cate, count, setCount}) => {

    // 카테고리 별 제이슨 데이터
    const photo_result = photoData[`${cate[0]}`];
    
    return(
    <>
        {
            [1,2,3,4,5,6,7,8,9].map(function(a, i){
                setCount(i+1);

                return(
                <div className='main-pictures width100'>
                    <img src={require('../img/'+photo_result[i].img)} />
                </div>
                )
            })
        }
    </>
    )
}

export default Photos;