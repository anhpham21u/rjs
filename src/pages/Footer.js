import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className="bg-dark">
      <div className="container flex-nm flex-nm--justify-between p-30 flex-dnm flex-dnm--column flex-dnm--align-center">
        <div className="mb-5-sm">
          <h2 className={styles.head + " mb-5"}>CUSTOMER</h2>
          <div className="flex flex--align-center flex--column">
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

        <div className="mb-5-sm">
          <h2 className={styles.head + " mb-5"}>COMPANY</h2>
          <div className="flex flex--align-center flex--column">
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

        <div className="mb-5-sm">
          <h2 className={styles.head + " mb-5"}>SOCIAL MEDIA</h2>
          <div className="flex flex--align-center flex--column">
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
