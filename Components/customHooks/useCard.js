import { url } from '../Constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, addCost } from '../redux/cartSlice';
const Card = (props) => {
  const dispatch = useDispatch();
  const addItemsToCart = (item) => {
    dispatch(addItem(item));
    dispatch(addCost(item?.data?.card?.info?.price / 100));
  };
  const restId = props.data?.card?.info?.id;
  console.log(restId);
  const name = props.data?.card?.info?.name;
  let imgID = url + props.data?.card?.info?.imageId;

  const price = props.data?.card?.info?.price / 100;
  const Veg = props.data?.card?.info?.itemAttribute?.vegClassifier;
  const ratting = '****';
  if (props.data.card.info.imageId === undefined) {
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
      className='mt-[30px] p-[10px] box-content h-[auto] w-[200px]  border-stone-700 hover:shadow-2xl rounded-3xl
        overflow-hidden  hover:bg-gray-200 transition hover:translate-y-[-2px]   cursor-pointer
'
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
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded'
        onClick={() => addItemsToCart(props)}
      >
        Add To Cart
      </button>
    </div>
  );
};
export default Card;
