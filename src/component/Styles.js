// Styles.js
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

// export const Pic = styled.div`
// width:90%;
// height: 100%;
// `;

// export const Picimg = styled.img`
// width:100%;
// height: 100%;
// border-radius:10px;
// `;