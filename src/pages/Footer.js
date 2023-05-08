import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className="bg-dark">
      <div className="container flex flex--justify-between p-30">
        <div>
          <h2 className={styles.head}>CUSTOMER</h2>
          <div className="flex flex--column">
            <a href="#" className={styles.link}>
              Help & Contact Us
            </a>
            <a href="#" className={styles.link}>
              Returns ans Refunds
            </a>
            <a href="#" className={styles.link}>
              Online Stores
            </a>
            <a href="#" className={styles.link}>
              Term & Conditions
            </a>
          </div>
        </div>

        <div>
          <h2 className={styles.head}>COMPANY</h2>
          <div className="flex flex--column">
            <a href="#" className={styles.link}>
              What We Do
            </a>
            <a href="#" className={styles.link}>
              Available
            </a>
            <a href="#" className={styles.link}>
              Lastest Pots
            </a>
            <a href="#" className={styles.link}>
              FAQS
            </a>
          </div>
        </div>

        <div>
          <h2 className={styles.head}>SOCIAL MEDIA</h2>
          <div className="flex flex--column">
            <a href="#" className={styles.link}>
              Twiter
            </a>
            <a href="#" className={styles.link}>
              Isagram
            </a>
            <a href="#" className={styles.link}>
              Facebook
            </a>
            <a href="#" className={styles.link}>
              Printerest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
