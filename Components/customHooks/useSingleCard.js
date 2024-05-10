import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from './useData';
import Card from './useCard';

const SingleCard = () => {
  const [singleCardData, setSingleCardData] = useState(null);
  const apidata = useData();
  const params = useParams();
  const restId = params.id.slice(1);
  useEffect(() => {
    if (apidata) {
      // console.log(apidata);
      const data = apidata.filter((ele) => {
        // console.log(ele);
        return ele?.card?.info?.id === restId;
      });
      // console.log(data);
      setSingleCardData(data[0]);
    }
  }, [apidata]);
  if (singleCardData != null) {
    return (
      <>
        <Card data={singleCardData} />
      </>
    );
  }
};
export default SingleCard;
