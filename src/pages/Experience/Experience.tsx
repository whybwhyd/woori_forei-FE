import React, { useState } from 'react';
import * as St from './style';
import Map from 'components/Map/KakaoMap';

const Experience = () => {
  const [search, setSearch] = useState('');
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
    }
    console.log(search);
  };
  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 문화체험 프로그램</div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 문화체험 프로그램 </div>
        <div className="BPMap">
          <Map />
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default Experience;
