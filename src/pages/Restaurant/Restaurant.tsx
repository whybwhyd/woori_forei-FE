import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReSearchCard from './ReSearchCard';
import * as St from './style';
import { restaurantsApi } from 'api/openApi';
import Map from 'components/Map/KakaoMap';

const Restaurant = () => {
  const [search, setSearch] = useState('');
  const [mapState, setMapState] = useState(0);
  const { data } = useQuery({
    queryKey: ['restaurants'],
    queryFn: restaurantsApi,
  });
  const filteredData = data?.filter(
    (item: { fdReprsntMenu: string; address: string; postSj: string }) => {
      if (
        item.fdReprsntMenu.includes(search) ||
        item.address.includes(search) ||
        item.postSj.includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    },
  );
  const OnChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  const searchHandler = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
    }
    console.log(search);
    setMapState(1);
  };
  return (
    <St.BestPlaceWrapper>
      <St.BPWrapper>
        <div className="BPTitle">서울시 맛집</div>
        <St.SearchInputFrame>
          <St.SearchInput
            placeholder="위치를 검색하세요."
            onChange={OnChange}
            value={search}
            onKeyPress={handleKeyPress}
          />
          <St.SearchInputBtn onClick={searchHandler}>검색</St.SearchInputBtn>
        </St.SearchInputFrame>
        <div className="BPTitle">내 주변 맛집 </div>
        <div>
          <button onClick={() => setMapState(0)}>지도에서 검색하기</button>
          <button onClick={() => setMapState(1)}>검색결과</button>
        </div>
        <div className="BPMap">
          {mapState === 0 && <Map />}
          {mapState === 1 && (
            <ReSearchCard data={filteredData} search={search} />
          )}
        </div>
      </St.BPWrapper>
    </St.BestPlaceWrapper>
  );
};
export default Restaurant;
