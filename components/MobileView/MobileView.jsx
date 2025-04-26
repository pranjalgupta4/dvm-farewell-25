import styles from "./MobileView.module.scss";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mainPlate from "/verticals/mainPlate.png";

import frame2 from "/verticals/frame2.png";
import base from "/verticals/basemobilering.png";
import projection from "/verticals/mobileProjection.png";

import leftArrow from "/verticals/leftArrow.svg";
import rightArrow from "/verticals/rightArrow.svg";

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
  const [memberIndx, setmemberIndx] = useState(3);
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
        <div className={styles.subPlate}>
          <p className={styles.namePlate} ref={namePlateRef}>
            {namePlate}
          </p>
        </div>
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
            <></>
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
