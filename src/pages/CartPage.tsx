import Swal from "sweetalert2";
import CartCard from "../components/ui/cart/CartCard";
import {
  removeFromCart,
  updateCartQuantity,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const CartPage = () => {
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  // calculate total price
  const totalPrice = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };
  // handle remove from cart
  const handleRemoveFromCart = async (id: string) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
      }
    });
  };
  //handle update quantity
  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };
  return (
    <div className="">
      <div className="bg-slate-600 text-white w-full h-[280px] flex items-center px-5 mb-10">
        <div className="">
          <h1 className="text-5xl font-bold">C A R T</h1>
          <p className="font-semibold mt-3">Home / Cart</p>
        </div>
      </div>
      <div className="lg:w-9/12 mx-auto">
        <CartCard
          cart={cart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          totalPrice={totalPrice}
        ></CartCard>
      </div>
    </div>
  );
};

export default CartPage;
