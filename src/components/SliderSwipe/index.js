import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import classNames from "classnames/bind";
import styles from "./SliderSwiper.module.scss";
import Product1 from "~/assets/images/p1.webp";
import Product2 from "~/assets/images/p2.webp";
import Product3 from "~/assets/images/p3.webp";
import Product4 from "~/assets/images/p4.webp";
import Product5 from "~/assets/images/p5.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const productItem = [
  {
    src: Product1,
    name: "Authentic Dia De Los Muertos Shoes",
    price: 70,
  },
  {
    src: Product2,
    name: "Authentic Stackform OSF Shoes",
    price: 75,
  },
  {
    src: Product3,
    name: "Sk8-Hi Tapered Stackform OSF Shoes",
    price: 95,
  },
  {
    src: Product4,
    name: "Guided Dia de Los Muertos T-Shirt",
    price: 30,
  },
  {
    src: Product5,
    name: "Old Skool Dia De Los Muertos Shoes",
    price: 80,
  },
];

const cx = classNames.bind(styles);

function SliderSwipe() {
  return <Slider />;
}

export default SliderSwipe;

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        // navigation
        // pagination={{ clickable: true }}
        slidesOffsetAfter={0}
        centerInsufficientSlides={true}
        className={cx("slide-container")}
        effect="slide"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
      >
        {productItem.map((item) => (
          <SwiperSlide key={item.src} className={cx("slide-content")}>
            <img src={item.src} alt={item.name} className={cx("slide-img")} />
            <p className={cx("slide-name")}>{item.name}</p>
            <span className={cx("slide-price")}>${item.price}.00</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
