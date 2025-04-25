import styles from "./carousel.module.scss";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mainPlate from "../../public/verticals/mainPlate.png";
import subPlate from "../../public/verticals/subPlate.png";
import king from "../../public/verticals/virat kohli.png";
import frame2 from "../../public/verticals/frame2.png";
import leftArrow from "../../public/verticals/leftArrow.svg";
import rightArrow from "../../public/verticals/rightArrow.svg";

import verticals from "./verticals.js";

function Carousel() {
  const { contextSafe } = useGSAP();

  const [indx, setindx] = useState(2);
  const [memberIndx, setmemberIndx] = useState(3);

  const verticalsRef = useRef([]);
  const membersRef = useRef([]);

  const allMembers = verticals.flatMap((vertical) =>
    vertical.members.map((member) => ({
      ...member,
      team: vertical.team,
      index: vertical.index,
    }))
  );
  const switcherMem = (num) =>
    num < 0 ? num + allMembers.length : num > 7 ? num - allMembers.length : num;
  const switcher = (num) =>
    num < 0 ? num + verticals.length : num > 5 ? num - verticals.length : num;

  // useEffect(() => {
  //   setindx(allMembers[switcherMem(memberIndx)].index);
  //   console.log(indx);
  // }, [memberIndx]);

  useEffect(() => {
    console.log("memberIndx: ", memberIndx);
    const carouselMover = contextSafe(() => {
      membersRef.current.forEach((el, index) => {
        switch (index) {
          case switcherMem(memberIndx - 3):
            gsap.to(el, {
              x: "-120%",
              y: "-2%",
              z: "-250px",
              filter: "blur(2px) contrast(1.2) brightness(0.3)",
              opacity: 0,
              scale: 1,
              duration: 1,
              ease: "circ.out",
            });
            break;

          case switcherMem(memberIndx - 2):
            gsap.to(el, {
              x: "-83%",
              y: "-2%",
              z: "-150px",
              filter: "blur(2px) contrast(1.2) brightness(0.3)",
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "circ.out",
            });
            break;

          case switcherMem(memberIndx - 1):
            gsap
              // .to(el, {
              //   x: "0%",
              //   y: "0%",
              //   z: "-100px",
              //   filter: "blur(0px) contrast(1) brightness(1)",
              //   duration: 1,
              //   ease: "circ.out",
              // });
              .to(el, {
                x: "-45%",
                y: "-2%",
                z: "-100px",
                filter: "blur(1px) contrast(1.2) brightness(0.6)",
                duration: 1,
                ease: "circ.out",
              });
            break;

          case switcherMem(memberIndx):
            const tl1 = gsap.timeline();
            tl1
              .to(el, {
                x: "-53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                // scale: 0.9,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "0%",
                y: "0%",
                z: "0px",
                filter: "blur(0px) contrast(1) brightness(1)",
                duration: 0.5,
                ease: "circ.out",
              });
            break;

          case switcherMem(memberIndx + 1):
            const tl2 = gsap.timeline();
            tl2
              .to(el, {
                x: "53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                // scale: 0.9,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "45%",
                y: "-2%",
                z: "-100px",
                filter: "blur(1px) contrast(1.2) brightness(0.6)",
                duration: 0.5,
                ease: "circ.out",
              });
            break;

          case switcherMem(memberIndx + 2):
            gsap.to(el, {
              x: "83%",
              y: "-2%",
              z: "-150px",
              filter: "blur(2px) contrast(1.2) brightness(0.3)",
              duration: 1,
              ease: "circ.out",
              opacity: 1,
              scale: 1,
            });
            break;

          case switcherMem(memberIndx + 3):
            gsap.to(el, {
              x: "120%",
              y: "-2%",
              z: "-250px",
              filter: "blur(2px) contrast(1.2) brightness(0.3)",
              scale: 1,
              opacity: 0,
              duration: 1,
              ease: "circ.out",
            });
            break;

          default:
            gsap.to(el, {
              x: "0%",
              y: "0%",
              z: "-250px",
              filter: "blur(2px) contrast(1.2) brightness(0.3)",
              opacity: 0,
              scale: 0,
              duration: 1,
              ease: "circ.out",
            });
        }
      });
    });
    carouselMover();
  }, [memberIndx]);

  useEffect(() => {
    const initialPose = contextSafe(() => {
      verticalsRef.current.forEach((el, index) => {
        if (index === switcher(indx + 3)) {
          gsap.set(el, {
            display: "none",
          });
        } else {
          const targetMap = {
            [switcher(indx - 2)]: "-10deg",
            [switcher(indx - 1)]: "-6deg",
            [switcher(indx + 1)]: "6deg",
            [switcher(indx + 2)]: "10deg",
          };
          const angle = targetMap[index] || "0deg";

          const targetMap2 = {
            [switcher(indx - 2)]: "-30px",
            [switcher(indx - 1)]: "-10px",
            [switcher(indx + 1)]: "-10px",
            [switcher(indx + 2)]: "-30px",
          };
          const zTranslate = targetMap2[index] || "0px";

          gsap.to(el, {
            display: "flex",
            z: zTranslate,
            rotateY: angle,
            duration: 1,
            ease: "power2.inOut",
          });
        }
      });
    });

    initialPose();
  }, []);

  const verticalMover = contextSafe(() => {
    verticalsRef.current.forEach((el, index) => {
      if (index === switcher(indx + 3)) {
        gsap.set(el, {
          display: "none",
        });
      } else {
        const targetMap = {
          [switcher(indx - 2)]: "-10deg",
          [switcher(indx - 1)]: "-6deg",
          [switcher(indx + 1)]: "6deg",
          [switcher(indx + 2)]: "10deg",
        };
        const angle = targetMap[index] || "0deg";

        const targetMap2 = {
          [switcher(indx - 2)]: "-30px",
          [switcher(indx - 1)]: "-10px",
          [switcher(indx + 1)]: "-10px",
          [switcher(indx + 2)]: "-30px",
        };
        const zTranslate = targetMap2[index] || "0px";

        gsap.to(el, {
          display: "flex",
          z: zTranslate,
          rotateY: angle,
          duration: 1,
          ease: "power2.inOut",
        });
      }
    });
  });

  const handleClick = (direction) => {
    setmemberIndx((prev) => {
      return direction === "left"
        ? switcherMem(prev + 1)
        : switcherMem(prev - 1);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {allMembers.map((member, index) => (
          <div
            key={index}
            className={styles.framedPic}
            ref={(el) => (membersRef.current[index] = el)}
          >
            <img src={member.pic} alt="membersPic" />
            <img src={frame2} alt="frame2" />
          </div>
        ))}
        <img
          src={leftArrow}
          alt="leftArrow"
          className={styles.arrow}
          onClick={() => handleClick("left")}
        />
        <img
          src={rightArrow}
          alt="rightArrow"
          className={styles.arrow}
          onClick={() => handleClick("right")}
        />
      </div>
      <div className={styles.verticals}>
        {verticals.map((vertical, index) =>
          index !== indx ? (
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
