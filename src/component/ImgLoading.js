import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from '../img/spinner.gif'

// spinner 이미지 추가
export default () => {
  return (
    <Background>
      <img src={Spinner} alt="loading.." width="10%" />
    </Background>
  );
};