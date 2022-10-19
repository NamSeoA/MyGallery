function Nav(){
    return(
    <div className='nav'>
      <div className='nav-center'>
      {/* 제목 */}
      <div className='nav-title'>
        <img src={require('../img/logo.png')} />
      </div >
      {/* 메뉴 */}
      <ul className='nav-menu'>
        <li className='nav-menus'>ABOUT</li>
        <li className='nav-menus'>PHOTOS</li>
        <li className='nav-menus'>SEEN</li>
      </ul>
      </div>
    </div>
    )
}

export default Nav;