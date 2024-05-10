import React, { useState, useEffect } from 'react';
import useData from './customHooks/useData';
import Card from './customHooks/useCard';

const RestBody = () => {
  const apiData = useData();
  const [searchText, setSearchText] = useState(null);
  const [allRestaurents, setAllRestaurents] = useState(null);
  const [filteredRestaurents, setFilteredRestaurents] = useState(null);
  useEffect(() => {
    setAllRestaurents(apiData);
    setFilteredRestaurents(apiData);
  }, [apiData]);

  function Filter(searchText) {
    const filteredData = allRestaurents.filter((ele) => {
      return ele?.card?.info?.name.includes(searchText);
    });
    return filteredData;
  }

  if (allRestaurents !== null) {
    return (
      <div className='mt-[15px] justify-around'>
        <div className='items-center ml-[1235px]  shadow-md sticky top-[120px]'>
          <input
            type='text'
            placeholder={searchText}
            className='shadow-lg border-black'
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className='font-mono ml-[8lpx]'
            onClick={() => {
              const data = Filter(searchText);
              setFilteredRestaurents(data);
            }}
          >
            Search
          </button>
        </div>
        <div className='flex flex-wrap justify-around ml-[180px] mr-[243px] p-[19px] '>
          {filteredRestaurents.map((element, index) => (
            <Card key={index} data={element} />
          ))}
        </div>
      </div>
    );
  }
};
export default RestBody;
