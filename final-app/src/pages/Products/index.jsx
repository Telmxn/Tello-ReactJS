import { Link, useParams } from "react-router-dom";
import style from "./products.module.css";
import Filtering from "../../components/Filtering";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPageProducts } from "../../store/actions/productThunk";
import { useEffect, useState } from "react";
import SkeletonCard from "../../components/skeletons/SkeletonCard";

const Products = () => {
  const params = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [priceAbove, setPriceAbove] = useState(0);
  const [priceBelow, setPriceBelow] = useState(0);

  const { products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  let sorting = sortBy?.split(".");

  useEffect(() => {
    dispatch(
      getPageProducts({
        sortBy: sorting != undefined ? sorting[0] : null,
        sortOrder: sorting?.length == 2 ? sorting[1] : null,
      })
    );
  }, [sortBy]);

  let filteredProducts = products?.pageProducts?.filter((item) => {
    if (priceAbove != 0 && priceBelow != 0) {
      return item.price.raw > priceAbove && item.price.raw < priceBelow;
    } else if (priceAbove != 0 && priceBelow == 0) {
      return item.price.raw > priceAbove;
    } else if (priceAbove == 0 && priceBelow != 0) {
      return item.price.raw < priceBelow;
    }
    return item;
  });

  filteredProducts = filteredProducts.map((product) => {
    if (categories.length != 0) {
      for (let category of categories) {
        let res = false;
        product.categories.forEach((pCategory) => {
          if (pCategory.name == category) {
            console.log(product);
            res = true;
            return product;
          }
        });
        if (res) {
          return product;
        }
      }
    } else {
      return product;
    }
  });

  // filteredProducts = filteredProducts.map((product) => {
  //   if (categories.length != 0) {
  //     console.log(categories.length, "Girdi");
  //     for (let category of categories) {
  //       let res = false;
  //       product.categories.forEach((pCategory) => {
  //         if (pCategory.name == category) {
  //           console.log(product);
  //           res = true;
  //           return product;
  //         }
  //       });
  //       if (res) {
  //         return product;
  //       }
  //     }
  //   } else {
  //     return product;
  //   }
  // });

  filteredProducts = filteredProducts.filter(Boolean);
  console.log(filteredProducts);
  return (
    <div className={style.productsContainer}>
      <div className={style.breadCrumb}>
        <Link to={"/"}>Ana səhifə</Link>

        {params.category == undefined ? (
          <>
            <img src="/next.svg" alt="In" />
            <Link to="/products">Məhsullar</Link>
          </>
        ) : (
          <>
            <img src="/next.svg" alt="In" />
            <Link to={"/products/" + params.category}>
              {params.category.charAt(0).toUpperCase() +
                params.category.slice(1)}
            </Link>
          </>
        )}
        {params.subcategory == undefined ? (
          ""
        ) : (
          <>
            <img src="/next.svg" alt="In" />
            <Link to={`/products/${params.category}/${params.subcategory}`}>
              {params.subcategory.charAt(0).toUpperCase() +
                params.subcategory.slice(1)}
            </Link>
          </>
        )}
      </div>
      <Filtering
        setSortBy={setSortBy}
        setCategories={setCategories}
        setPriceAbove={setPriceAbove}
        setPriceBelow={setPriceBelow}
        setColors={setColors}
        count={filteredProducts.length}
      />
      <div className={style.cards}>
        {status == "fulfilled" ? (
          filteredProducts?.map((product) => {
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
