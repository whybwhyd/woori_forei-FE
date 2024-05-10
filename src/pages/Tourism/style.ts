import { styled } from 'styled-components';

export const TourTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;
export const TourWrapper = styled.div`
  width: 1440px;
  padding: 60px;
  display: flex;
  flex-direction: column;

  .Title {
    font-size: 15px;
  }
`;
export const SearchInputFrame = styled.div`
  position: relative;
  width: 940px;
  margin: 50px auto 50px auto;
`;
export const SearchInput = styled.input`
  position: relative;
  width: 940px;
  height: 54px;
  border: none;
  border-radius: 30px;
  padding-left: 25px;
  font-size: 15pt;
  background: #f1fbff;
`;
export const SearchInputBtn = styled.div`
  position: absolute;
  top: 12px;
  bottom: 0;
  right: 60px;
  boder: none;
  height: 23px;
  font-size: 15pt;
`;
export const LoadingCard = styled.div`
  width: 1320px;
  height: 496px;
  display: flex;
  align-items: center;
  justify-content: center;
  #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: black;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const SearchCardOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const SearchCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 1320px;
  height: 496px;
`;
export const SearchInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
  justify-content: center;
  font-size: 16pt;
  .BlueFocusBefore {
    display: flex;
    padding-top: 20px;
    padding-right: 30px;
    padding-bottom: 20px;
    background: #005391;
    border-radius: 10px;
    color: white;
    gap: 70px;
  }
  .DataTitle {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-left: 45px;
  }

  .DataContent {
  }
  .DataUrl {
    padding-top: 20px;
    a {
      width: max-content;
      max-width: 308px;
      word-break: break-all;
    }
  }
`;
export const LinkBtn = styled.button`
  width: 437px;
  height: 93px;
  background-color: #d9d9d9;
  border: none;
  font-size: 18pt;
`;

export const NavTotalLine = styled.div`
  width: 867px;
  height: 1px;
  border: 1px solid #cecece;
  border-radius: 0.5px;
`;
export const NavMovelLine = styled.div<{ $pagelinenum: number }>`
  width: ${({ $pagelinenum }) =>
    $pagelinenum < 1 ? `${867 * $pagelinenum}px` : '867px'};
  transition: width 0.3s ease;
  height: 1px;
  border: 1px solid black;
  border-radius: 0.5px;
  position: absolute;
`;
export const NextBeforeBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #b2b2b2;
  display: flex;
  align-items: center;
`;
export const NextBeforeFrame = styled.div`
  display: flex;
`;
export const NavFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
