import styles from "./MobileView.module.scss";

export default function MobileView() {
  return (
    <div className={styles.mobileContainer}>
      <img src={header} alt="header" className={styles.header} />
      <div className={styles.logoContainer}>
        <a
          href="https://www.bits-apogee.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={apogee} alt="apogee-logo" />
        </a>
        <a
          href="https://www.bits-oasis.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={oasis} alt="oasis-logo" />
        </a>
        <a
          href="https://bits-dvm.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dvm} alt="dvm-logo" />
        </a>
      </div>
      <div className={styles.logoContainer + " " + styles.logoContainer2}>
        <a
          href="https://www.bits-apogee.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={apogee} alt="apogee-logo" />
        </a>
        <a
          href="https://www.bits-oasis.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={oasis} alt="oasis-logo" />
        </a>
        <a
          href="https://bits-dvm.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dvm} alt="dvm-logo" />
        </a>
      </div>
      <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.gratitude}>
        <img src={gratitude} alt="gratitude-bg" />
        <p>
          You made our time here special! This journey had tons of learning, fun
          and memories along the way. Here's to a bright future!
        </p>
      </div>
      <div className={styles.accessories}>
        <img
          src={randomScroll}
          alt="randomScroll"
          className={styles.randomScroll}
        />
        <div className={styles.accessBox1}>
          <img src={accessBG} alt="accessBG" />
          <p>END OF THE YEAR</p>
          <img src={lock} alt="lock" className={styles.lock} />
        </div>
        <div className={styles.accessBox1}>
          <img src={accessBG} alt="accessBG" />
          <p>T - 22:22</p>
        </div>
      </div>
      <Carousel />
      <img src={date} alt="party-date" className={styles.date} />
    </div>
  );
}
