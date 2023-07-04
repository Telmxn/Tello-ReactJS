import style from "./cart.module.css";
import shoppingCart from "../../assets/images/gray-shopping-cart.svg";
import { Link } from "react-router-dom";
import PriceContainer from "../../components/PriceContainer";
import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {}, []);

  useEffect(() => {
    // if (cart?.status == "fulfilled") {
    //   if (localStorage.getItem("checkedArr") == null) {
    //     const checked = cart?.cart?.line_items?.reduce((res, item) => {
    //       return [...res, { [item.id]: false }];
    //     }, []);
    //     localStorage.setItem("checkedArr", JSON.stringify(checked));
    //   }
    // }
  }, []);

  if (cart?.loading == "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className={style.cart}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2>Səbət ({cart?.total_items} məhsul)</h2>
      {cart?.cart?.total_items == 0 ? (
        <div className={style.emptyCart}>
          <img src={shoppingCart} alt="Shopping Cart" />
          <p>Səbətiniz halhazırda boşdur</p>
          <Link to={"/products"}>Alış-verişə davam et</Link>
        </div>
      ) : (
        <div className={style.fullCart}>
          <PriceContainer />
          <div className={style.products}>
            {cart?.line_items.map((product) => {
              return (
                <CartProduct
                  id={product.id}
                  productId={product.product_id}
                  image={product.image.url}
                  name={product.name}
                  color={
                    product.selected_options.filter(
                      (option) => option.group_name == "Rəng"
                    )[0].option_name
                  }
                  price={product.line_total.formatted}
                  quantity={product.quantity}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
