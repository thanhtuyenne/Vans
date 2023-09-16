import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  // Define List
  const Shop = [
    "SHOP",
    "Home",
    "Men",
    "Women",
    "Kids",
    "Classic",
    "Promotions",
  ];
  const Sports = ["SPORTS", "BMX", "Stakeboarding", "Snow", "Surf"];
  const Support = [
    "SUPPORT",
    "FAQ",
    "Order and Return Status",
    "Returns",
    "Ways to Shop Vans",
    "Store Locator",
    "Missing Points?",
    "Your Privacy Choices",
    "Accessibilities",
  ];
  const Company = [
    "COMPANY",
    "Terms of Use",
    "Privacy",
    "Careers",
    "About",
    "CA Supply Chains Act",
    "Sustainability Hub",
    "Checkerboard Fund",
    "Affiliate Program",
    "Unsolicited Materials",
  ];
  const Contact = [
    {
      name: "EMAIL",
      desc: "Contact us",
    },
    {
      name: "ADDRESS",
      desc: "1588 South Coast Drive Costa Mesa, CA 92626",
    },
    {
      name: "HOURS",
      desc: "(Mon - Fri) 6am - 4pm PST\n(Sat - Sun) 6:30am - 3pm PST",
    },
  ];
  // Render List
  const renderFooterItem = (items) => {
    return items.map((item) => (
      <li className={cx("footer-info-item")}>{item}</li>
    ));
  };

  const renderContact = (items) => {
    return items.map((item) => (
      <div className={cx("contact-item")}>
        <p className={cx("contact-title")}>{item.name}</p>
        <span className={cx("contact-desc")}>{item.desc}</span>
      </div>
    ));
  };
  return (
    <>
      <div className={cx("footer-container")}>
        <div className={cx("footer-info")}>
          <ul className={cx("footer-info-list")}>{renderFooterItem(Shop)}</ul>
          <ul className={cx("footer-info-list")}>{renderFooterItem(Sports)}</ul>
          <ul className={cx("footer-info-list")}>
            {renderFooterItem(Support)}
          </ul>
          <ul className={cx("footer-info-list")}>
            {renderFooterItem(Company)}
          </ul>
          <ul className={cx("footer-info-list")}>
            <li className={cx("footer-info-item")}>CONTACT</li>
            <div className={cx("contact-info-container")}>
              {renderContact(Contact)}
            </div>
          </ul>
        </div>
        <div className={cx("footer-socialMedia")}></div>
        <div className={cx("footer-coop")}></div>
      </div>
    </>
  );
}
export default Footer;
