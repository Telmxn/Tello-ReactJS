import AdsSlider from "../../components/AdsSlider";
import ProductsContainer from "../../components/ProductsContainer";
import Advertisement from "../../components/Advertisement";
import appleLogo from "../../assets/images/apple-logo.png";
import iPhoneAirTag from "../../assets/images/iPhoneAirTag.jpg";
import iPhone11 from "../../assets/images/iphone11.jpeg";
import telephoneC from "../../assets/images/telephoneC.png";
import watchC from "../../assets/images/watchC.png";
import accesoriseC from "../../assets/images/accesoriseC.png";
import phoneback from "../../assets/images/phoneback.svg";
import watchback from "../../assets/images/watchback.svg";
import toshiba from "../../assets/images/toshiba.png";
import philips from "../../assets/images/philips.png";
import hp from "../../assets/images/hp.png";
import electrolux from "../../assets/images/electrolux.png";
import gorenje from "../../assets/images/gorenje.png";
import bosch from "../../assets/images/bosch.png";
import acer from "../../assets/images/acer.png";
import style from "./home.module.css";
import Category from "../../components/Category";
import Features from "../../components/Features";
import BrandsSlider from "../../components/BrandsSlider";

const brands = [
  {
    id: 1,
    img: toshiba,
    link: "#",
  },
  {
    id: 2,
    img: philips,
    link: "#",
  },
  {
    id: 3,
    img: hp,
    link: "#",
  },
  {
    id: 4,
    img: electrolux,
    link: "#",
  },
  {
    id: 5,
    img: gorenje,
    link: "#",
  },
  {
    id: 6,
    img: bosch,
    link: "#",
  },
  {
    id: 7,
    img: acer,
    link: "#",
  },
];

const Home = () => {
  return (
    <div>
      <AdsSlider />
      <ProductsContainer
        title="Ən çox satılan məhsullar"
        link={"#"}
        order="sort_order"
      />
      <ProductsContainer
        title="Yeni gələn məhsullar"
        link={"#"}
        order="created"
      />
      <div className={style.adsContainer}>
        <Advertisement
          isWhiteBack={true}
          logo={appleLogo}
          message="iPhone 11. Rəngli. Güclü. Əsl sizə lazım olan."
          price="1519"
          loanPrice="127"
          link="#"
          image={iPhone11}
        />
        <Advertisement
          isWhiteBack={false}
          logo={appleLogo}
          message="Əşyalarınızı tapmağın super asan yolu."
          price="79"
          name="AirTag"
          link="#"
          image={iPhoneAirTag}
        />
      </div>
      <ProductsContainer
        title="Yeni gələn aksessuarlar"
        link={"#"}
        order="created"
        category="accessorise"
      />
      <div className={style.categories}>
        <Category
          name="Telefon"
          isFull
          count="322"
          image={telephoneC}
          link={"#"}
          background={`url(${phoneback})`}
        />
        <Category
          name="Smart Saat"
          count="46"
          image={watchC}
          link={"#"}
          background={`url(${watchback})`}
        />
        <Category
          name="Aksesuar"
          count="891"
          image={accesoriseC}
          link={"#"}
          background={`url(${watchback})`}
        />
      </div>
      <Features />
      <BrandsSlider brands={brands} />
    </div>
  );
};

export default Home;
