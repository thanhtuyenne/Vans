import classNames from "classnames/bind";
import styles from "./HeaderAd.module.scss";
import { useEffect, useState } from "react";
import Textra from "react-textra";

const cx = classNames.bind(styles);
function HeaderAd() {
  const content = ["NEW LOWER PRICES ON CLASSIC", "FREE SHIPPING & RETURNS"];

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   if (index === content.length - 1) {
  //     setIndex(0);
  //   }
  //   setTimeout(() => {
  //     setIndex(index + 1);
  //   }, 4000);
  // }, [index]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Textra
          className={cx("content-ad")}
          effect="simple"
          stopDuration={4000}
          data={["NEW LOWER PRICES ON CLASSIC", "FREE SHIPPING & RETURNS"]}
        />
        <a href="#" className={cx("content-detailed")}>
          DETAILS
        </a>
      </div>
    </div>
  );
}

export default HeaderAd;
