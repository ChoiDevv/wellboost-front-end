import React from 'react';
import KakaoLogin from './oauth/kakaoLogin';
import log from '../../util/logger';

const Login = () => {
    return (
        <div>
            <h1>로그인 페이지입니다.</h1>
            <KakaoLogin />
        </div>
    )
}

export default Login;