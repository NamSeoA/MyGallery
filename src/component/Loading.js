import '../App.css';
function Loading (){
    return(
        <div className='loading'>
            {/* <p style={{color:'white'}}>로딩중 !!</p> */}
            <img src={require('../img/logo.png')} className='loading-img'/>
        </div>
    )
}

export default Loading;