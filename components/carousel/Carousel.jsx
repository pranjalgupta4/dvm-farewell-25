import styles from "./carousel.module.scss";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mainPlate from "../../public/verticals/mainPlate.png";
import subPlate from "../../public/verticals/subPlate.png";
import king from "../../public/verticals/virat kohli.png";
import frame2 from "../../public/verticals/frame2.png";

import verticals from "./verticals.js";

function Carousel() {
  const [indx, setindx] = useState(0);
  const verticalsRef = useRef([]);
  const { contextSafe } = useGSAP();

  const initialPose = contextSafe(() => {
    verticalsRef.current.forEach((el, index) => {
      gsap.set(el, {
        rotateY:
          index === 0
            ? "-13deg"
            : index === 4
            ? "13deg"
            : index === 1
            ? "-4deg"
            : index === 3
            ? "4deg"
            : "0deg",
        z: index === 0 || index === 4 ? "-30px" : "-10px",
      });
    });
  });
  useEffect(() => {
    initialPose();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.framedPic}>
          <img src={king} alt="king" />
          <img src={frame2} alt="frame2" />
        </div>
      </div>
      <div className={styles.verticals}>
        {verticals.slice(indx, indx + 5).map((vertical, index) =>
          index !== 2 ? (
            <div
              key={index}
              className={styles.vertical}
              ref={(el) => (verticalsRef.current[index] = el)}
            >
              <img
                src={subPlate}
                alt={"subPlate"}
                className={styles.subPlate}
              />
              <p className={styles.verticalText}>{vertical.team}</p>
            </div>
          ) : (
            <div key={index} className={styles.verticalMain}>
              <img
                src={mainPlate}
                alt={"mainPlate"}
                className={styles.mainPlate}
              />
              <p className={styles.verticalText}>{vertical.team}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Carousel;
