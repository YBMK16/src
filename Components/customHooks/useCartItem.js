import { url } from '../Constants';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCost, reduceCost, removeItem } from '../redux/cartSlice';
const CartCard = (props) => {
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();
  const RemoveItem = () => {
    console.log('hiii');
    dispatch(reduceCost(props?.data?.card?.info?.price / 100));
    dispatch(removeItem(props?.data?.card?.info?.id));
  };
  const IncreaseCost = () => {
    setItemCount(itemCount + 1);
    dispatch(addCost(props.data?.card?.info?.price / 100));
  };
  const DecreaseCost = () => {
    setItemCount(itemCount - 1);
    dispatch(reduceCost(props?.data?.card?.info?.price / 100));
    dispatch(removeItem(props?.data?.card?.info?.id));
  };
  const restId = props?.data?.card?.info?.id;
  const name = props?.data?.card?.info?.name;
  let imgID = url + props?.data?.card?.info?.imageId;

  const price = props?.data?.card?.info?.price / 100;
  const Veg = props?.data?.card?.info?.itemAttribute?.vegClassifier;
  const ratting = '****';
  if (props?.data.card.info.imageId === undefined) {
    if (Veg === 'VEG')
      imgID =
        'https://amritsruae.com/blog/wp-content/uploads/2021/08/palak-paneer.jpeg';
    else {
      imgID =
        'https://christieathome.com/wp-content/uploads/2021/02/Honey-Sesame-Chicken-Updated-5.jpg';
    }
  }
  return (
    <div
      className='items-center     ml-[575px]
    mb-[15px] p-[10px] box-content h-[auto] w-[200px]  border-stone-700 hover:shadow-2xl rounded-3xl'
    >
      <Link to={'/restaurent/:' + restId}>
        <img
          src={imgID}
          alt=''
          className='h-[182px] w-[210px] rounded-3xl hover:grayscale-1'
        />
      </Link>
      <h1 className='font-mono ml-[15px]'>{name}</h1>
      <h1 className='font-mono ml-[15px]'>cost Per item : {price}</h1>
      <h1 className='font-mono ml-[15px]'>Classifier: {Veg}</h1>
      <h1 className='font-mono ml-[15px]'>Rating : {ratting}</h1>
      <button
        className='text-gray-400 bg-blue-500 ml-[120px] p-[5px] mt-[5px]'
        onClick={RemoveItem}
      >
        Remove
      </button>
      <h2>
        <button
          className='text-3xl text-gray-400 mr-[30px] ml-[30px]'
          onClick={() => DecreaseCost()}
        >
          -
        </button>
        {/* {itemCount} */}
        {itemCount}
        <button
          className='text-3xl text-gray-400 ml-[30px] mr-[30px]'
          onClick={() => IncreaseCost()}
        >
          +
        </button>
      </h2>
    </div>
  );
};
export default CartCard;
