import styles from "./page.module.scss";
import header from "../../public/header.png";
import banner from "../../public/farewell-banner.png";
import gratitude from "../../public/gratitude-bg.png";
import date from "../../public/party-date.svg";
import dvm from "../../public/DVM logo.svg";
import oasis from "../../public/oasis.svg";
import apogee from "../../public/apogee.svg";

function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <img src={header} alt="header" className={styles.header} />
        <div className={styles.logoContainer}>
          <a href="https://www.bits-apogee.org/" target="_blank" rel="noopener noreferrer">
            <img src={apogee} alt="apogee-logo" />
          </a>
          <a href="https://www.bits-oasis.org/" target="_blank" rel="noopener noreferrer">
            <img src={oasis} alt="oasis-logo" />
          </a>
          <a href="https://bits-dvm.org/" target="_blank" rel="noopener noreferrer">
            <img src={dvm} alt="dvm-logo" />
          </a>
        </div>
        <div className={styles.logoContainer + " " + styles.logoContainer2}>
          <a href="https://www.bits-apogee.org/" target="_blank" rel="noopener noreferrer">
            <img src={apogee} alt="apogee-logo" />
          </a>
          <a href="https://www.bits-oasis.org/" target="_blank" rel="noopener noreferrer">
            <img src={oasis} alt="oasis-logo" />
          </a>
          <a href="https://bits-dvm.org/" target="_blank" rel="noopener noreferrer">
            <img src={dvm} alt="dvm-logo" />
          </a>
        </div>
        <img src={banner} alt="banner" className={styles.banner} />
        <div className={styles.gratitude}>
          <img src={gratitude} alt="gratitude-bg" />
          <p>
            You made our time here special! This journey had tons of learning,
            fun and memories along the way. Here’s to a bright future!
          </p>
        </div>
        <img src={date} alt="party-date" className={styles.date} />
      </div>
    </div>
  );
}

export default Page;
