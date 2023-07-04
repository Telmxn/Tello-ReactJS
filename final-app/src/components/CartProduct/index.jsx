import style from "./cartProduct.module.css";
import redAzn from "../../assets/images/redazn.svg";
import graydelete from "../../assets/images/delete.svg";
import redDelete from "../../assets/images/red-delete.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../store/actions/cartThunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartProduct = ({
  id,
  productId,
  image,
  name,
  color,
  price,
  quantity,
}) => {
  const [count, setCount] = useState(quantity);

  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCart({ id: cartId }));
    // console.log(submitCart.cart, "test");
    // console.log(
    //   submitCart?.cart?.line_items?.some((item) => item.product_id == productId)
    // );
    // setIsChecked(submitCart?.cart?.line_items?.some((item) => item.id == id));
    // console.log(submitCart, "submit");
  }, [cart.cart]);

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      toast.promise(
        dispatch(
          updateCartItem({
            cartId: cart.id,
            itemId: id,
            quantity: count - 1,
          })
        ),
        {
          pending: "Səbət yenilənir.",
          success: "Səbət yeniləndi.",
          error: "Səbət yenilənmədi.",
        }
      );
    }
  };
  const plusCount = () => {
    setCount((prev) => prev + 1);
    toast.promise(
      dispatch(
        updateCartItem({
          cartId: cart.id,
          itemId: id,
          quantity: count + 1,
        })
      ),
      {
        pending: "Səbət yenilənir.",
        success: "Səbət yeniləndi.",
        error: "Səbət yenilənmədi.",
      }
    );
  };

  const removeItem = () => {
    toast.promise(
      dispatch(updateCartItem({ cartId: cart.id, itemId: id, quantity: 0 })),
      {
        pending: "Məhsul səbətdən silinir.",
        success: "Məhsul səbətdən silindi.",
        error: "Məhsul silinmədi.",
      }
    );
  };

  // const addSubmitCart = () => {
  //   // console.log(isChecked);
  //   if (!isChecked) {
  //     dispatch(
  //       addItemToCartVariant({
  //         cartId: submitCartId,
  //         productId: productId,
  //         quantity: quantity,
  //         variant: variant,
  //       })
  //     );
  //   }
  // };

  // const addSubmitCart = useCallback(
  //   (submitCartId, productId, quantity, variant) => {
  //     if (!isChecked) {
  //       dispatch(
  //         addItemToCartVariant({
  //           cartId: submitCartId,
  //           productId: productId,
  //           quantity: quantity,
  //           variant: variant,
  //         })
  //       );
  //     }
  //   },
  //   [submitCartId, productId, quantity, variant]
  // );

  return (
    <>
      <div className={style.product}>
        <label className={style.container}>
          <input type="checkbox" />
          <span
            className={style.checkmark}
            // onClick={addSubmitCart}
          ></span>
        </label>
        <img src={image} alt="Product" />
        <button onClick={removeItem}>
          <img src={graydelete} alt="Delete" className={style.grayDelete} />
          <img src={redDelete} alt="Delete" className={style.redDelete} />
        </button>
        <div className={style.about}>
          <div className={style.productInfo}>
            <Link to={`/product/${productId}`}>{name}</Link>
            <p className={style.color}>
              <span>Rəng:</span>
              {color}
            </p>
            <p className={style.price}>
              {price}
              <img src={redAzn} alt="Manat" />
            </p>
          </div>
          <div className={style.count}>
            <button onClick={minusCount}>-</button>
            <p>{count}</p>
            <button onClick={plusCount}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
