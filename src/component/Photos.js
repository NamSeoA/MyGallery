import photoData from '../photo';
import Footer from './Footer';
function Photos(){
    return(
        <>
        <div className='main-block-top photos-main'>
            <div className='photos-main-content'>
            <div className='photos-main-top'></div>
            <div className='photo-content-pic'>

                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
                <div className='main-pictures width100' style={{backgroundColor:'blue'}}></div>
            </div>
            </div>
        </div>

        <Footer />
        
        </>
    )
}

export default Photos;