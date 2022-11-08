function ViewPhoto({photo, cate, photoData}) {

        const photo_result = photoData[`${photo}`];
      
        return (  
          <>
            {
              cate.map(function(a, i) {   
                  return(
                  <div className={'main-pictures'} key={i}>
                    <img src={require('../img/' + photo_result[i].img)} alt="이미지" />
                  </div>
                  )
              })
            }
          </>
        )
}

export default ViewPhoto;