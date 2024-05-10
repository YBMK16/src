import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderElements = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='text-center m-[auto]'>
      <ul className='flex   justify-between p-[auto] m-[auto] '>
        <Link to='/'>
          <li className='font-mono list-item p-[auto] ml-[80px]'>Home</li>
        </Link>

        <li className='font-mono list-item p-[auto] ml-[80px]'>About</li>
        <Link to='/help'>
          <li className='font-mono list-item p-[auto] ml-[80px]'>Help</li>
        </Link>
        <Link to='/cart'>
          <li className='font-mono list-item p-[auto] ml-[80px]'>
            Cart {cartItems.length}
          </li>
        </Link>
        <li className='font-mono list-item p-[auto] ml-[80px]'>
          <button>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderElements;
