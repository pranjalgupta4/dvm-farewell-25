import styles from "./MobileView.module.scss";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mainPlate from "/verticals/mainPlate.png";

import frame2 from "/verticals/frame2.png";
import base from "/verticals/basemobilering.png";
import projection from "/verticals/mobileProjection.png";

import leftArrow from "/verticals/leftArrow2.svg";
import rightArrow from "/verticals/rightArrow2.svg";

import verticals from "../carousel/verticals.js";

import video from "/verticals/video.png";
import front from "/verticals/front.png";
import back from "/verticals/back.png";
import uiux from "/verticals/uiux.png";
import app from "/verticals/app.png";
import game from "/verticals/game.png";

export default function MobileView() {
  //Declaring variables and Functions
  const { contextSafe } = useGSAP();

  const [indx, setindx] = useState(2);
  const [memberIndx, setmemberIndx] = useState(4);
  const [namePlate, setnamePlate] = useState("");

  const verticalsRef = useRef([]);
  const membersRef = useRef();
  const namePlateRef = useRef();

  const verticalLogos = [front, back, uiux, app, game, video];

  const allMembers = verticals.flatMap((vertical) =>
    vertical.members.map((member) => ({
      ...member,
      team: vertical.team,
      index: vertical.index,
    }))
  );
  const switcherMem = (num) =>
    num < 0
      ? num + allMembers.length
      : num > allMembers.length - 1
      ? num - allMembers.length
      : num;
  const switcher = (num) =>
    num < 0 ? num + verticals.length : num > 5 ? num - verticals.length : num;

  //Image Carousel Animation
  useEffect(() => {
    // const carouselMover = contextSafe(() => {
    //   membersRef.current.forEach((el, index) => {
    //     switch (index) {
    //       case switcherMem(memberIndx - 3):
    //         gsap.to(el, {
    //           x: "-120%",
    //           y: "-2%",
    //           z: "-250px",
    //           filter: "blur(2px) contrast(1.2) brightness(0.3)",
    //           opacity: 0,
    //           scale: 1,
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //         break;

    //       case switcherMem(memberIndx - 2):
    //         gsap.to(el, {
    //           x: "-83%",
    //           y: "-2%",
    //           z: "-150px",
    //           filter: "blur(2px) contrast(1.2) brightness(0.3)",
    //           scale: 1,
    //           opacity: 1,
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //         break;

    //       case switcherMem(memberIndx - 1):
    //         const tlFirst1 = gsap.timeline({
    //           paused: animator && animatorRight,
    //         });
    //         tlFirst1.to(el, {
    //           x: "-45%",
    //           y: "-2%",
    //           z: "-100px",
    //           filter: "blur(1px) contrast(1.2) brightness(0.6)",
    //           duration: 1,
    //           ease: "circ.out",
    //         });

    //         const tlFirst2 = gsap.timeline({ paused: animatorLeft });
    //         tlFirst2
    //           .to(el, {
    //             x: "-53%",
    //             y: "-1%",
    //             z: "-50px",
    //             filter: "blur(1px) contrast(1.1) brightness(0.8)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           })
    //           .to(el, {
    //             x: "-45%",
    //             y: "-2%",
    //             z: "-100px",
    //             filter: "blur(1px) contrast(1.2) brightness(0.6)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           });
    //         break;

    //       case switcherMem(memberIndx):
    //         const tlSecond1 = gsap.timeline({ paused: animatorRight });
    //         tlSecond1
    //           .to(el, {
    //             x: "-53%",
    //             y: "-1%",
    //             z: "-50px",
    //             filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           })
    //           .to(el, {
    //             x: "0%",
    //             y: "0%",
    //             z: "0px",
    //             filter: "blur(0px) contrast(1) brightness(1)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           });

    //         const tlSecond2 = gsap.timeline({ paused: animatorLeft });
    //         tlSecond2
    //           .to(el, {
    //             x: "53%",
    //             y: "-1%",
    //             z: "-50px",
    //             filter: "blur(1px) contrast(1.1) brightness(0.8)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           })
    //           .to(el, {
    //             x: "0%",
    //             y: "0%",
    //             z: "0px",
    //             filter: "blur(0px) contrast(1) brightness(1)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           });
    //         const tlSecond3 = gsap.timeline({
    //           paused: animator,
    //         });
    //         tlSecond3.to(el, {
    //           x: "0%",
    //           y: "0%",
    //           z: "0px",
    //           filter: "blur(0px) contrast(1) brightness(1)",
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //         break;

    //       case switcherMem(memberIndx + 1):
    //         const tlThird1 = gsap.timeline({ paused: animatorRight });
    //         tlThird1
    //           .to(el, {
    //             x: "53%",
    //             y: "-1%",
    //             z: "-50px",
    //             filter: "blur(0.5px) contrast(1.1) brightness(0.8)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           })
    //           .to(el, {
    //             x: "45%",
    //             y: "-2%",
    //             z: "-100px",
    //             filter: "blur(1px) contrast(1.2) brightness(0.6)",
    //             duration: 0.5,
    //             ease: "sine.inOut",
    //           });

    //         const tlThird2 = gsap.timeline({
    //           paused: animator && animatorLeft,
    //         });
    //         tlThird2.to(el, {
    //           x: "45%",
    //           y: "-2%",
    //           z: "-100px",
    //           filter: "blur(1px) contrast(1.2) brightness(0.6)",
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //         break;

    //       case switcherMem(memberIndx + 2):
    //         gsap.to(el, {
    //           x: "83%",
    //           y: "-2%",
    //           z: "-150px",
    //           filter: "blur(2px) contrast(1.2) brightness(0.3)",
    //           duration: 1,
    //           ease: "circ.out",
    //           opacity: 1,
    //           scale: 1,
    //         });
    //         break;

    //       case switcherMem(memberIndx + 3):
    //         gsap.to(el, {
    //           x: "120%",
    //           y: "-2%",
    //           z: "-250px",
    //           filter: "blur(2px) contrast(1.2) brightness(0.3)",
    //           scale: 1,
    //           opacity: 0,
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //         break;

    //       default:
    //         gsap.to(el, {
    //           x: "0%",
    //           y: "0%",
    //           z: "-250px",
    //           filter: "blur(2px) contrast(1.2) brightness(0.3)",
    //           opacity: 0,
    //           scale: 0,
    //           duration: 1,
    //           ease: "circ.out",
    //         });
    //     }
    //   });
    // });

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
      setnamePlate(allMembers[memberIndx].name);
    }, 500);
  }, [memberIndx]);

  //Vertical Box Animation
  useEffect(() => {
    setindx(allMembers[memberIndx].index);
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

  //Calling of animation on click of arrows
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
        <div className={styles.framedPic} ref={membersRef}>
          <img
            src={allMembers[memberIndx].pic}
            className={styles.memberpics}
            alt="membersPic"
          />
          <img src={frame2} alt="frame2" />
        </div>
        <p className={styles.namePlate} ref={namePlateRef}>
          {namePlate}
        </p>
        <div className={styles.verticalLogo}>
          <img
            src={verticalLogos[indx]}
            alt="verticalLogo"
            className={styles.verticalLogoImg}
          />
        </div>
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
            <React.Fragment key={index}></React.Fragment>
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
      <img src={projection} alt="light2" className={styles.light} />
      <img src={base} alt="" className={styles.base} />
    </div>
  );
}
