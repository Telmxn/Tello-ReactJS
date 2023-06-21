import { Link, useLocation, useParams } from "react-router-dom";
import style from "./products.module.css";
import Filtering from "../../components/Filtering";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPageProducts } from "../../store/actions/productThunk";
import { useEffect, useState } from "react";
import SkeletonCard from "../../components/skeletons/SkeletonCard";

const Products = () => {
  const [sortBy, setSortBy] = useState(null);
  const [priceAbove, setPriceAbove] = useState(0);
  const [priceBelow, setPriceBelow] = useState(0);

  let location = useLocation();
  console.log(location);

  console.log(useParams());

  let paths = location.pathname?.split("/").slice(2);

  const { products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  let sorting = sortBy?.split(".");

  useEffect(() => {
    dispatch(
      getPageProducts({
        sortBy: sorting != undefined ? sorting[0] : null,
        sortOrder: sorting?.length == 2 ? sorting[1] : null,
        category: "apple",
      })
    );
  }, [sortBy]);
  console.log(sorting?.length == 2 ? sorting[1] : null);

  console.log(products.pageProducts);

  const filteredProducts = products?.pageProducts?.filter(
    (item) => item.price.raw > priceAbove
  );

  return (
    <div className={style.productsContainer}>
      <div className={style.breadCrumb}>
        <Link to={"/"}>Ana səhifə</Link>
        {paths.map((path, index) => {
          return (
            <div key={index}>
              <img src="/next.svg" alt="In" />
              <Link to={"/" + path}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </div>
          );
        })}
      </div>
      <Filtering setSortBy={setSortBy} />
      <div className={style.cards}>
        {status == "fulfilled" ? (
          filteredProducts.map((product) => {
            return (
              <Card
                key={product.id}
                price={product.price.formatted}
                name={product.name}
                image={product.image.url}
              />
            );
          })
        ) : (
          <>
            {[...Array(15).keys()].map((i) => {
              return <SkeletonCard key={i} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
