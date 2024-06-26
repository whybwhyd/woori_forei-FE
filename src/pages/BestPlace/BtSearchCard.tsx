import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import * as St from './style';
export interface CardProps {
  data?:
    | Array<{
        id: number;
        postSj: string;
        cmmnUseTime: string;
        cmmnRstde: string;
        cmmnTelno: string;
        address: string;
        cmmnHmpgUrl: string;
      }>
    | undefined;
}
const BtSearchCard = (props: CardProps) => {
  const { data } = props;
  const [pageCount, setPageCount] = useState(0);
  const arrayLength = data ? data?.length : 20;
  const pageNavigationNum =
    pageCount + 3 > arrayLength
      ? `${arrayLength} / ${arrayLength}`
      : `${pageCount + 3} / ${arrayLength}`;
  const pagelinenum = (pageCount + 3) / arrayLength;

  const pageBeforeBtnHandler = () => {
    if (pageCount < 3) {
      alert('첫 번째 페이지입니다!');
      return;
    }
    setPageCount(pageCount - 3);
  };
  const pageNextBtnHandler = () => {
    if (pageCount >= arrayLength - 3) {
      alert('마지막 페이지입니다!');
      return;
    }
    setPageCount(pageCount + 3);
  };
  const voidData = (value: string) => {
    return value === '' ? '없음' : value;
  };
  return (
    <St.SearchCardOuterWrapper>
      <St.SearchCardWrapper>
        {data?.slice(pageCount, pageCount + 3).map((value) => (
          <St.SearchInnerWrapper key={value.postSj}>
            <div>
              {/* <a href={value.cmmnHmpgUrl} style={{ textDecoration: 'none' }}> */}
              <div className="BlueFocusBefore">
                <p className="DataTitle">{value.postSj}</p>
                <p className="DataContent">
                  <li>서비스시간 :{' ' + voidData(value.cmmnUseTime)}</li>
                  <li>휴무일 :{' ' + voidData(value.cmmnRstde)}</li>
                  <li>주소 : {voidData(value.address)}</li>
                  <li>전화 : {voidData(value.cmmnTelno)}</li>
                </p>
              </div>
              {/* </a> */}
            </div>
          </St.SearchInnerWrapper>
        ))}
      </St.SearchCardWrapper>
      <St.NavFrame>
        <St.NavTotalLine />
        <St.NavMovelLine $pagelinenum={pagelinenum} />
        <div>{pageNavigationNum}</div>
        <St.NextBeforeFrame>
          <St.NextBeforeBtn>
            <IoIosArrowBack onClick={pageBeforeBtnHandler} size="20px" />
          </St.NextBeforeBtn>
          <St.NextBeforeBtn>
            <IoIosArrowForward onClick={pageNextBtnHandler} size="20px" />
          </St.NextBeforeBtn>
        </St.NextBeforeFrame>
      </St.NavFrame>
    </St.SearchCardOuterWrapper>
  );
};

export default BtSearchCard;
