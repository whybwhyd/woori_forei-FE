import React from 'react';
import { Cookies } from 'react-cookie';
import { IoIosSearch } from 'react-icons/io';
import { PiSignpostLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import headerLock from '../../asset/headerLock.png';
import mainLogo from '../../asset/mainLogo.png';
import * as St from './style';
import { loginState } from 'recoil/loginState';

const Footer = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const cookieLogin = cookies.get('login');
  const [isLogin] = useRecoilState(loginState);

  const logOutHandler = () => {
    if (cookieLogin) {
      cookies.remove('userId');
    } else {
      sessionStorage.removeItem('userId');
    }
    alert('로그아웃 되었습니다!');
    window.location.reload();
    navigate('/');
  };
  const myPageHandler = () => {
    const userId = cookies.get('userId');
    navigate(`/mypage/${userId}`);
  };
  return (
    <St.Footer>
      <div className="Inner">
        <St.FooterTop>
          <div className="logoWrapper">
            <img alt="로고" src={mainLogo} />
          </div>
          <div className="loginWrapper ">
            {!isLogin ? (
              <>
                <St.logoWrapper
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  <img
                    src={headerLock}
                    alt="자물쇠"
                    style={{ width: '30px', height: '30px' }}
                  />
                  로그인
                </St.logoWrapper>
                |
                <St.logoWrapper
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  <PiSignpostLight size="30px" />
                  회원가입
                </St.logoWrapper>
                <St.logoWrapper>
                  <IoIosSearch size="30px" />
                </St.logoWrapper>
              </>
            ) : (
              <>
                <div onClick={logOutHandler}>로그아웃</div>|
                <div onClick={myPageHandler}>마이페이지</div>
              </>
            )}
            | 이용안내 | 개인정보처리방침
          </div>
        </St.FooterTop>
        <div>팀 : 캣핸드 | 대표메일 : caat.hand@gmail.com</div>
        <div>사업자등록번호 : 123-12-12345 | 서울특별시</div>
        <div>ⓒ 2024. 캣핸드 all rights reserved.</div>
      </div>
    </St.Footer>
  );
};

export default Footer;
