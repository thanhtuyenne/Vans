import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import Vans from "~/assets/images/Vans-logo.png";
import {
  faCartShopping,
  faMagnifyingGlass,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const preHeaderItem = [
    {
      id: "item1",
      text: "Order Status",
    },
    {
      id: "item2",
      text: "Live Chat",
    },
    {
      id: "item3",
      text: "Find in Store",
    },
    {
      id: "item4",
      text: "Gift Cards",
    },
    {
      id: "item5",
      text: "Favorites (0)",
    },
    {
      id: "item6",
      text: "Join Vans Family",
    },
    {
      id: "item7",
      text: "Sign In",
    },
  ];

  const mainHeaderItem = [
    {
      id: "mainHeaderItem1",
      text: "SHOES",
    },
    {
      id: "mainHeaderItem2",
      text: "CLOTHING",
    },
    {
      id: "mainHeaderItem3",
      text: "ACCESSORIES",
    },
    {
      id: "mainHeaderItem4",
      text: "CLASSICS",
    },
    {
      id: "mainHeaderItem5",
      text: "CUSTOMS",
    },
    {
      id: "mainHeaderItem6",
      text: "STAKEBOARDING",
    },
    {
      id: "mainHeaderItem7",
      text: "SALE",
    },
    {
      id: "mainHeaderItem8",
      text: "HALLOWEEN",
    },
    {
      id: "mainHeaderItem9",
      text: "MORE",
    },
  ];

  const renderPreHeaderItem = (items) => {
    return items.map((item) => (
      <li id={item.id} className={cx("pre-header-item")}>
        {item.text}
      </li>
    ));
  };

  const renderMainHeaderItem = (items) => {
    return items.map((item) => (
      <li id={item.id} className={cx("main-header-item")}>
        {item.text}
      </li>
    ));
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("pre-header")}>
        <ul className={cx("pre-header-list")}>
          {renderPreHeaderItem(preHeaderItem)}
        </ul>
      </div>

      <div className={cx("main-header")}>
        <img className={cx("vans-logo")} src={Vans} alt="Vans Logo" />
        <ul className={cx("main-header-list")}>
          {renderMainHeaderItem(mainHeaderItem)}
        </ul>

        <div className={cx("search-bar")}>
          <button className={cx("search-logo")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            className={cx("search-input")}
            placeholder="Search..."
          />
          <button className={cx("camera-logo")}>
            <FontAwesomeIcon icon={faCamera} />
          </button>
        </div>

        <button className={cx("cart-container")}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </header>
  );
}

export default Header;
