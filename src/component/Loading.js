import '../App.css';
function Loading (){
    return(
        <div className='loading'>
            <img src={require('../img/logo_loading.png')} className='loading-img'/>
        </div>
    )
}

export default Loading;