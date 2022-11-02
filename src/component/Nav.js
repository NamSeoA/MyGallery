import { useNavigate } from 'react-router-dom';
function Nav(){
    let navigate = useNavigate(); // <Link>
    
    return(
    <div className='nav'>
      <div className='nav-center'>
      {/* 제목 */}
      <div className='nav-title'>
        <img src={require('../img/logo.png')} />
      </div >
      {/* 메뉴 */}
      <ul className='nav-menu'>
        <li className='nav-menus' onClick={()=>{ navigate('/about'); }}>ABOUT</li>
        <li className='nav-menus' onClick={()=>{ navigate('/photos'); }}>PHOTOS</li>
        <li className='nav-menus' onClick={()=>{ navigate('/seen'); }}>SEEN</li>
      </ul>
      </div>
    </div>
    )
}

export default Nav;