import styles from "./carousel.module.scss";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mainPlate from "../../public/verticals/mainPlate.png";
import subPlate from "../../public/verticals/subPlate.png";
import king from "../../public/verticals/virat kohli.png";
import frame2 from "../../public/verticals/frame2.png";
import light1 from "../../public/verticals/light1.png";
import light2 from "../../public/verticals/light2.png";

import leftArrow from "../../public/verticals/leftArrow.svg";
import rightArrow from "../../public/verticals/rightArrow.svg";

import verticals from "./verticals.js";

function Carousel() {
  //Declaring variables and Functions
  const { contextSafe } = useGSAP();

  const [indx, setindx] = useState(2);
  const [memberIndx, setmemberIndx] = useState(3);
  const [animatorRight, setAnimatorRight] = useState(true);
  const [animatorLeft, setAnimatorLeft] = useState(true);
  const [animator, setAnimator] = useState(false);
  const [namePlate, setnamePlate] = useState("");
  const [teamNamePlate, setteamNamePlate] = useState("");

  const verticalsRef = useRef([]);
  const membersRef = useRef([]);
  const namePlateRef = useRef();
  const teamNameRef = useRef();

  const allMembers = verticals.flatMap((vertical) =>
    vertical.members.map((member) => ({
      ...member,
      team: vertical.team,
      index: vertical.index,
    }))
  );
  const switcherMem = (num) =>
    num < 0 ? num + allMembers.length : num > 7 ? num - allMembers.length : num;
  const switcher = (num) => (num < 0 ? num + 6 : num > 5 ? num - 6 : num);

  //Image Carousel Animation
  useEffect(() => {
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
            const tlFirst1 = gsap.timeline({
              paused: animator && animatorRight,
            });
            tlFirst1.to(el, {
              x: "-45%",
              y: "-2%",
              z: "-100px",
              filter: "blur(1px) contrast(1.2) brightness(0.6)",
              duration: 1,
              ease: "circ.out",
            });

            const tlFirst2 = gsap.timeline({ paused: animatorLeft });
            tlFirst2
              .to(el, {
                x: "-53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(1px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "-45%",
                y: "-2%",
                z: "-100px",
                filter: "blur(1px) contrast(1.2) brightness(0.6)",
                duration: 0.5,
                ease: "sine.inOut",
              });
            break;

          case switcherMem(memberIndx):
            const tlSecond1 = gsap.timeline({ paused: animatorRight });
            tlSecond1
              .to(el, {
                x: "-53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "0%",
                y: "0%",
                z: "0px",
                filter: "blur(0px) contrast(1) brightness(1)",
                duration: 0.5,
                ease: "sine.inOut",
              });

            const tlSecond2 = gsap.timeline({ paused: animatorLeft });
            tlSecond2
              .to(el, {
                x: "53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(1px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "0%",
                y: "0%",
                z: "0px",
                filter: "blur(0px) contrast(1) brightness(1)",
                duration: 0.5,
                ease: "sine.inOut",
              });
            const tlSecond3 = gsap.timeline({
              paused: animator,
            });
            tlSecond3.to(el, {
              x: "0%",
              y: "0%",
              z: "0px",
              filter: "blur(0px) contrast(1) brightness(1)",
              duration: 1,
              ease: "circ.out",
            });
            break;

          case switcherMem(memberIndx + 1):
            const tlThird1 = gsap.timeline({ paused: animatorRight });
            tlThird1
              .to(el, {
                x: "53%",
                y: "-1%",
                z: "-50px",
                filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
                duration: 0.5,
                ease: "sine.inOut",
              })
              .to(el, {
                x: "45%",
                y: "-2%",
                z: "-100px",
                filter: "blur(1px) contrast(1.2) brightness(0.6)",
                duration: 0.5,
                ease: "sine.inOut",
              });

            const tlThird2 = gsap.timeline({
              paused: animator && animatorLeft,
            });
            tlThird2.to(el, {
              x: "45%",
              y: "-2%",
              z: "-100px",
              filter: "blur(1px) contrast(1.2) brightness(0.6)",
              duration: 1,
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

    //Nameplate Animation
    const namePlateChanger = contextSafe(() => {
      if (namePlateRef.current) {
        const tl = gsap.timeline();
        tl.set(namePlateRef.current, { opacity: 1 })
          .to(namePlateRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "circ.inOut",
          })
          .to(namePlateRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "circ.inOut",
          });
      }
    });

    namePlateChanger();
    setTimeout(() => {
      setnamePlate(allMembers[switcherMem(memberIndx)].name);
    }, 500);
    carouselMover();
  }, [memberIndx]);

  //Vertical Box Animation
  useEffect(() => {
    setindx(allMembers[switcherMem(memberIndx)].index);
  }, [memberIndx]);

  useEffect(() => {
    const verticalMover = contextSafe(() => {
      verticalsRef.current.forEach((el, index) => {
        switch (index) {
          case switcher(indx - 2):
            gsap.to(el, {
              z: "-30px",
              left: "0%",
              x: "0%",
              rotateY: "-10deg",
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
            break;

          case switcher(indx - 1):
            gsap.to(el, {
              z: "-10px",
              left: "26%",
              x: "-50%",
              rotateY: "-6deg",
              width: "16.4%",
              duration: 1,
              ease: "power2.inOut",
            });
            break;

          case switcher(indx):
            gsap.to(el, {
              z: "0px",
              left: "50%",
              x: "-50%",
              rotateY: "0deg",
              width: "28%",
              duration: 1,
              ease: "power2.inOut",
            });
            break;

          case switcher(indx + 1):
            gsap.to(el, {
              z: "-10px",
              left: "74%",
              x: "-50%",
              rotateY: "6deg",
              width: "16.4%",
              duration: 1,
              ease: "power2.inOut",
            });
            break;

          case switcher(indx + 2):
            gsap.to(el, {
              z: "-30px",
              left: "100%",
              x: "-100%",
              rotateY: "10deg",
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
            break;

          default:
            const tl1 = gsap.timeline({ paused: animator && animatorRight });
            tl1
              .to(el, {
                z: "-30px",
                left: "110%",
                x: "-100%",
                rotateY: "90deg",
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
              })
              .to(el, {
                z: "-30px",
                left: "0%",
                x: "-50%",
                rotateY: "-70deg",
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
              });
            const tl2 = gsap.timeline({ paused: animator && animatorLeft });
            tl2
              .to(el, {
                z: "-30px",
                left: "0%",
                x: "-50%",
                rotateY: "-70deg",
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
              })
              .to(el, {
                z: "-30px",
                left: "110%",
                x: "-100%",
                rotateY: "90deg",
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
              });
            break;
        }
      });
    });

    //Team Name Animation
    const teamNameChanger = contextSafe(() => {
      if (teamNameRef.current) {
        const tl = gsap.timeline();
        tl.set(teamNameRef.current, { opacity: 1 })
          .to(teamNameRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "circ.inOut",
          })
          .to(teamNameRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "circ.inOut",
          });
      }
    });
    teamNameChanger();
    setTimeout(() => {
      setteamNamePlate(verticals[switcher(indx)].team);
    }, 500);

    verticalMover();
  }, [indx]);

  //Calling of animation on click of arrows
  const handleClick = (direction) => {
    setmemberIndx((prev) => {
      if (direction === "left") {
        setAnimatorLeft(false);
        setAnimatorRight(true);
        setAnimator(true);
        return switcherMem(prev + 1);
      } else {
        setAnimatorLeft(true);
        setAnimatorRight(false);
        setAnimator(true);
        return switcherMem(prev - 1);
      }
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

        <p className={styles.namePlate} ref={namePlateRef}>
          {namePlate}
        </p>

        <img src={light1} alt="light1" className={styles.light} />
        <img src={light2} alt="light2" className={styles.light} />
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
        {verticals.map((vertical, index) => (
          <React.Fragment key={index}>
            <div
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

            {index === indx && (
              <div className={styles.verticalMain}>
                <img
                  src={mainPlate}
                  alt={"mainPlate"}
                  className={styles.mainPlate}
                />
                <p className={styles.verticalText} ref={teamNameRef}>
                  {teamNamePlate}
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
