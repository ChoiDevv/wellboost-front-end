import React from 'react';

import KakaoLoginButton from '../../../components/button/oauth/kakaoLoginButton';

import log from '../../../util/logger';

const KakaoLogin = () => {
    const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const handleKakaoLogin =  () => {
        try {    
            const kakaoLoginUrl = `${KAKAO_AUTH_URL}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code`;
            window.location.href = kakaoLoginUrl;
        } catch (e) {
            log.error(e);
        }
    }

    return (
        <KakaoLoginButton onClick={ handleKakaoLogin }/>
    )
}

export default KakaoLogin;