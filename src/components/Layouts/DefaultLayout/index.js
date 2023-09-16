import classNames from "classnames/bind";
import Header from "~/components/Layouts/Header";
import styles from "./DefaultLayout.module.scss";
import HeaderAd from "~/components/Layouts/HeaderAd";
import Content from "../Content";
import Footer from "../Footer";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <HeaderAd />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
