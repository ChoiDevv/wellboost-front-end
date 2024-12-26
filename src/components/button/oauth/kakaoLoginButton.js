import React from 'react';

const KakaoLoginButton = ({ onClick }) => {
    return (
        <button onClick={ onClick }>
            <img
                src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_narrow.png"
                alt="카카오 로그인"
                className="kakao-logo"
            />
        </button>
    )
}

export default KakaoLoginButton;