import photoData from '../photo';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Photos({cate}){

    let num = [15, 11, 8, 18, 16, 14];
    let data;

    const [count, setCount] = useState(12);
    const [last, setLast] = useState(0); 
    const [list, setList] = useState(['J_1.jpg', 'J_2.jpg', 'J_3.jpg', 'J_4.jpg', 'J_5.jpg', 'J_6.jpg', 'J_7.JPG', 'J_8.JPG', 'J_9.JPG', 'J_10.JPG', 'J_11.JPG', 'J_12.JPG']);

    let number = count; // 로드 된 사진 개수

    let category;

    let arr;

    let idx;

    useEffect(() => {
        console.log("list : " + list);
    }, [list]);

    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>
            
            <ImageData count={count} setCount={setCount} list={list} setList={setList}/>
            
            </div>
            <button onClick={()=>{
                setLast(last + 1);
                
                axios.get('/photo.json')
                .then((res)=>{

                    let photo_json = res.data;
                    let test_arr = [];

                    for(let i=0; i<12; i++){

                        if ( number <= num[0] ) {
                            category = cate[0];
                            idx = (number - 1);
                        } else if ( number <= (num[0] + num[1]) ){
                            category = cate[1];
                            idx = ((number-1) - num[0]);
                        } else if ( number <= (num[0]+num[1]+num[2]) ){
                            category = cate[2];
                            idx = ((number-1) - (num[0]+num[1]));
                        } else if ( number <= (num[0]+num[1]+num[2]+num[3]) ){
                            category = cate[3];
                            idx = ((number-1) - (num[0]+num[1]+num[2]));
                        } else if ( number <= (num[0]+num[1]+num[2]+num[3]+num[4]) ){
                            category = cate[4];
                            idx = ((number-1) - (num[0]+num[1]+num[2]+num[3]));
                        } else if ( number <= (num[0]+num[1]+num[2]+num[3]+num[4]+num[5]) ){
                            category = cate[5];
                            idx = ((number-1) - (num[0]+num[1]+num[2]+num[3]+num[4]));
                        } else if ( number > (num[0]+num[1]+num[2]+num[3]+num[4]+num[5]) ){
                            category = "none";
                        }

                        if(category != "none"){
                            arr = photo_json[`${category}`][`${idx}`].img;
                            test_arr.push(arr);
                        }
                        
                        number = number + 1; // 로드 된 사진 개수

                    }

                    console.log("test_arr : " + test_arr);
                    setList([...list, ...test_arr]);
                    
                    test_arr = [];

                })
            
            }}>
                <img className='btn_seemore' src={require('../img/seemore-btn.png')} alt="더보기" />
            </button>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

const ImageData = ({count, setCount, list, setList}) => {
    
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

    // const photo_result = photoData[`${cate[0]}`];

    return(
    <>
        {
            [1,2,3,4,5,6,7,8,9,10,11,12].map(function(a, i){
                setCount(i+1);

                return(
                <div className='main-pictures width100'>
                    <img src={require('../img/'+list[i])} alt="사진" />
                </div>
                )
            })
        }
    </>
    )
}

export default Photos;