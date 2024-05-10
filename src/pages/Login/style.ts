import { styled } from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  font-size: 17pt;
  color: #888888;
  padding: 80px;

  .LoginTitle {
    display: flex;
    font-size: 25pt;
    margin-bottom: 30px;
    color: black;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translate(-10px, 0);
  }

  .LoginContents {
    padding: 70px;
  }

  .LoginBtnFrame {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }

  .LoginButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    font-size: 20pt;
    border-radius: 10px;
    width: 465px;
    height: 85px;
    background-color: white;
  }
`;
export const LoginDescription = styled.div`
  font-size: 20pt;
  margin-bottom: 20px;
`;

export const LoginMaintain = styled.div`
  display: flex;
  gap: 10px;
  font-size: 17pt;
`;

export const OtherMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d2d2d2;
  width: 525px;
  margin-top: 20px;
  padding-top: 35px;
  color: #444444;
`;

export const EmailNPasswordFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: black;

  .LoginIput {
    width: 450px;
    height: 75px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    padding-left: 80px;
    font-size: 20pt;
  }

  .LoginIcon {
    position: absolute;
    left: 25px;
  }
`;
const BtnStyle = `
width: 450px;
height: 75px;
font-size: 20pt;
background: #005391;
border: 1px solid #30a8ff;
border-radius: 10px;
color:white;
`;
export const LoginBtn = styled.button`
  ${BtnStyle}
`;

export const PasswordFindBtn = styled.button`
  ${BtnStyle}
  margin-top: 35px;
`;

export const InputTitle = styled.div`
  font-size: 20pt;
  color: black;
`;
export const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
`;
export const InputDescriptionFrame = styled.div`
  display: flex;
  padding-left: 29px;
  gap: 105px;
`;
export const Circle = styled.div`
  background: #30a8ff;
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
`;
