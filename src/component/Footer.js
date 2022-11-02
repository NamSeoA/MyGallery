function Footer(){

    return(
    <div className='main-footer'>
    <div className='main-footer-center'>

      <div className='main-footer-left'>
        {/* 왼쪽 일자 짝대기 */}
        <div className='main-footer-left-div'></div>
        {/* 오른쪽 글씨 */}
        <div className='mfl-content'>
          <div className='mfl-content-title'> Check all Photos </div>
          <div className='mfl-content-sub'> 직접 찍은 사진들을 <br/> 카테고리 별로 담아보았습니다. <br/> 더 다양한 사진들은 사진 목록에서 확인해주세요 :) </div>
        </div>
      </div>

      <div className='main-footer-right'>
        <div className='mfr-about'>
          <div className='main-footer-left-div'></div>
          <div className='mfr-about-title'>Contact</div>
        </div>
        <div className='mfr-about'>
          <div className='main-footer-left-div'></div>
          <div className='mfr-about-title'>About me</div>
        </div>
      </div>

    </div>

    <div className='main-line'>
      <hr className='main-line-hr' style={{borderTop: '3px solid #f3f3f3'}}/>
    </div>

  </div>
  )
}

export default Footer;