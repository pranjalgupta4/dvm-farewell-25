import styles from "./page.module.scss";
import Carousel from "../carousel/Carousel";
import MobileView from "../MobileView/MobileView";

import header from "/page/header.png";
import banner from "/page/farewell-banner.png";
import gratitude from "/page/gratitude-bg.png";
import accessBG from "/page/accessBG.png";

import date from "/page/party-date.svg";
import dvm from "/page/DVM logo.svg";
import oasis from "/page/oasis.svg";
import apogee from "/page/apogee.svg";
import randomScroll from "/page/randomScroll.svg";
import lock from "/page/lock.svg";
import headingLeftDesktop from "/page/headingLeftDesktop.svg";
import headingRightDesktop from "/page/headingRightDesktop.svg";
import headingLeftMobile from "/page/headingLeftMobile.svg";
import headingRightMobile from "/page/headingRightMobile.svg";

import { useEffect, useState } from "react";


function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.headingContainer}>
          {!isMobile && (
            <>
              <div className={`${styles.Heading} ${styles.left}`}>
                <img
                  src={headingLeftDesktop}
                  alt="heading-left"
                  className={styles.headingLeft}
                />
              </div>
              <div className={styles.desktopHeader}>
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
                <div
                  className={styles.logoContainer + " " + styles.logoContainer2}
                >
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
              </div>
              <div className={`${styles.Heading} ${styles.right}`}>
                <img
                  src={headingRightDesktop}
                  alt="heading-right"
                  className={styles.headingRight}
                />
              </div>
            </>
          )}
          {isMobile && (
            <>
              <div className={`${styles.mblHeading} ${styles.left}`}>
                <img
                  src={headingLeftMobile}
                  alt="heading-left"
                  className={styles.headingLeft}
                />
              </div>
              <div className={styles.mobileHeader}>
                <img src={dvm} className={styles.mobilelogo} alt="dvm" />
              </div>
              <div className={`${styles.mblHeading} ${styles.right}`}>
                <img
                  src={headingRightMobile}
                  alt="heading-right"
                  className={styles.headingRight}
                />
              </div>
            </>
          )}
        </div>
        <img src={banner} alt="banner" className={styles.banner} />
        <div className={styles.gratitude}>
          <img src={gratitude} alt="gratitude-bg" />
          <p>
            You made our time here special! This journey had tons of learning,
            fun and memories along the way. Here's to a bright future!
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

        {isMobile && (
          <div className={styles.mobileViewContainer}>
            <MobileView />
          </div>
        )}
        {!isMobile && <Carousel/>}
        <img src={date} alt="party-date" className={styles.date} />
      </div>
    </div>
  );
}

export default Page;
