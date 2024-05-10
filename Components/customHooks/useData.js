import { useState, useEffect } from 'react';

const RestData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getApiData();
  }, []);
  async function getApiData() {
    const apiData = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3018314&lng=80.4473149&restaurantId=614726&catalog_qa=undefined&query=Biryani&submitAction=ENTER'
    );
    const json = await apiData.json();
    setData(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  return data;
};
export default RestData;
