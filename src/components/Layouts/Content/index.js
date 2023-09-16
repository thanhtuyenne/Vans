import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import MainImg from "~/assets/images/mainImg.jpg";

import JustIn from "~/assets/images/arr1.webp";
import Shoes from "~/assets/images/arr2.webp";
import SlipOn from "~/assets/images/arr3.webp";
import StakeBoarding from "~/assets/images/arr4.webp";

import Collab1 from "~/assets/images/co1.webp";
import Collab2 from "~/assets/images/co2.webp";
import Collab3 from "~/assets/images/co3.webp";
import Collab4 from "~/assets/images/co4.jpg";

import SliderSwipe from "~/components/SliderSwipe";

const cx = classNames.bind(styles);
function Content() {
  return (
    <>
      <div className={cx("main-img")}>
        <img className={cx("poster")} src={MainImg} alt="Main Image" />
      </div>

      {/* NEW ARRIVALS */}
      <div className={cx("arrivals-container")}>
        <h3 className={cx("arrivals-title")}>SHOP NEW ARRIVALS</h3>
        <div className={cx("arrivals-list")}>
          <Arrivals src={JustIn} alt="Just In" title="Just In" />
          <Arrivals src={Shoes} alt="Shoes" title="Shoes" />
          <Arrivals src={SlipOn} alt="SlipOn" title="Slips-On" />
          <Arrivals
            src={StakeBoarding}
            alt="StakeBoarding"
            title="StakeBoarding"
          />
        </div>
      </div>

      {/* COLLABORATIONS */}
      <div className={cx("collabs-container")}>
        <Collabs
          src={Collab1}
          alt="Collab1"
          title="YOUR NEW FAVORITE:
                THE KNU SKOOL"
        />
        <Collabs src={Collab2} alt="Collab2" title="NEW LOWLANDS ARE HERE" />
        <Collabs src={Collab3} alt="Collab3" title="THE ULTRARANGE NEO VR3" />
        <Collabs src={Collab4} alt="Collab4" title="VANS X HOCKEY" />
      </div>

      {/* PRODUCTS */}
      <div className={cx("product-container")}>
        <div className={cx("product-header")}>
          <ul className={cx("product-title")}>
            <li className={cx("product-title-item")}>TRENDING</li>
            <li className={cx("product-title-item")}>/</li>
            <li className={cx("product-title-item")}>BEST SELLER</li>
          </ul>
          <div className={cx("product-decor")}></div>
        </div>
        <SliderSwipe />
      </div>
    </>
  );
}

export default Content;

const Arrivals = (props) => {
  return (
    <div className={cx("arrival-overlay")}>
      <img alt={props.alt} className={cx("arrival-img")} src={props.src} />
      <div className={cx("title-overlay")}>
        <span className={cx("arrival-title")}>{props.title}</span>
      </div>
    </div>
  );
};

const Collabs = (props) => {
  return (
    <div className={cx("collabs-overlay")}>
      <img alt={props.alt} className={cx("collabs-img")} src={props.src} />
      <div className={cx("collabs-content")}>
        <span className={cx("collabs-title")}>{props.title}</span>
        <button className={cx("collabs-btn")}>SHOW NOW</button>
      </div>
    </div>
  );
};
