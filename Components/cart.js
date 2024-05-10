import { useSelector } from 'react-redux';
import useCartCrad from './customHooks/useCartItem';
import { useDispatch } from 'react-redux';
import { clearCart, makeCostZero } from './redux/cartSlice';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCost = useSelector((store) => store.cart.cost);
  const dispatch = useDispatch();
  const ClearCart = () => {
    dispatch(clearCart());
    dispatch(makeCostZero());
  };
  return cartItems.length > 0 ? (
    <div className='inline    '>
      <div className='flex flex-wrap fixed top-[440px] left-[1000px] right-0'>
        <h3>Total Cost: {totalCost}</h3>
        <button
          className='text-gray-400 bg-blue-500'
          onClick={() => {
            ClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
      <h1 className='bold'>This is Your Cart</h1>
      {cartItems.map((ele, index) => {
        return useCartCrad(ele, { key: index });
      })}
    </div>
  ) : (
    <h1>Cart is Empty</h1>
  );
};
export default Cart;
