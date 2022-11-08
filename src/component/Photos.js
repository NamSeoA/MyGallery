import photoData from '../photo';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Photos({cate}){

    let num = [15, 11, 8, 18, 16, 14];
    let photoAll = [];
    let data;

    const [count, setCount] = useState(0);
    const [last, setLast] = useState(0); 
    const [list, setList] = useState(['J_1.JPG', 'J_2.JPG', 'J_3.JPG', 'J_4.JPG', 'J_5.JPG', 'J_6.JPG', 'J_7.JPG', 'J_8.JPG', 'J_9.JPG', 'J_10.JPG', 'J_11.JPG', 'J_12.JPG']);


    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>
            
            <ImageData cate={cate} count={count} setCount={setCount} num={num} list={list} setList={setList}/>
            
            </div>
            <button onClick={()=>{
                setLast(last + 1);

                axios.get('/photo.json')
                .then((res)=>{
                    console.log("res : " + res.data.jeju[1].img);
                })

            }}>
                <img className='btn_seemore' src={require('../img/seemore-btn.png')} />
            </button>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

const ImageData = ({i, cate, count, setCount, num, list, setList}) => {
    
    // useEffect(() => {
    //     // let copy;

    //     const result = photoData[`${cate[0]}`];
    //     let copy = [];

    //     for(let i=0; i<12; i++){
    //         console.log("i : " + i);
    //         console.log("result[i].img : " + result[i].img);
    //         copy.push(result[i].img);
    //     }
    //     setList(copy);
    // }, []);

    const photo_result = photoData[`${cate[0]}`];

    return(
    <>
        {
            [1,2,3,4,5,6,7,8,9,10,11,12].map(function(a, i){
                setCount(i+1);

                return(
                <div className='main-pictures width100'>
                    <img src={require('../img/'+list[i])} />
                </div>
                )
            })
        }
    </>
    )
}

export default Photos;