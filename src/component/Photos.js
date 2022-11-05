import photoData from '../photo';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';
function Photos({cate}){

    let num = [15, 11, 8, 18, 16, 14];
    let listImg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let photoAll = [];
    let data;
    
    const [last, setLast] = useState(0);

   let test = Object.values(photoData);
   const [photoList, setPhotoList] = useState(JSON.stringify(test[0]));

   console.log(JSON.stringify(test[1]));
    // console.log("test[0] stringfy : " + JSON.stringify(test[0]));
   


    // 전체 사진 배열에 담음
    for(let i=0; i<num.length; i++){

        if(cate[i] == 'jeju'){
            data = JSON.stringify(photoData.jeju);
        } else if(cate[i]  == 'memory'){
            data = JSON.stringify(photoData.memory);
        } else if (cate[i]  == 'street'){
            data = JSON.stringify(photoData.street);
        }else if (cate[i]  == 'sky'){
            data = JSON.stringify(photoData.sky);
        }else if (cate[i]  == 'store'){
            data = JSON.stringify(photoData.store);
        }else if (cate[i]  == 'japan'){
            data = JSON.stringify(photoData.japan);
        }

        data = JSON.parse(data);
    
        for(let j=0; j<num[i]; j++){
            photoAll = [...photoAll, data[j].img];
        }        
    }

    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>
                {
                    listImg.map(function(a, i){
                       // photoList = a
                        //let copy = [photoList, a];
                        // setPhotoList(copy);
                        // setLast(i);
                        return(<ImageData i={i} photoAll={photoAll}/>)
                    })
                }
            </div>
            <button onClick={()=>{
                setLast(last + 1);

                // for(let i = 0; i<last; i++){

                // }
            }}>더보기</button>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

function ImageData({i, photoAll}){
    return(
        <div className='main-pictures width100'>
            <img src={require('../img/'+photoAll[i])} />
        </div>
    )
}

export default Photos;