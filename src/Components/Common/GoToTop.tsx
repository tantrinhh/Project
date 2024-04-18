import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;

    setScrollRatio(scrolled);

    if (winScroll > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <Wrapper className="">
      {isVisible && (
        <div className="top-btn relative" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon w-8 h-8" />
          <div className="absolute w-full">
            <svg className="circle" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#fff"
                strokeWidth="0"
              />
              <circle
                className="progress-circle"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#aaa"
                strokeWidth="20"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - 251.2 * scrollRatio}
              />
            </svg>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    color: #fff;

    position: fixed;
    bottom: 5rem;
    right: 20px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @keyframes changeBackground {
      0% {
        background: #12c2e9;
      }
      20% {
        background: #c471ed;
      }
      40% {
        background: #f64f59;
      }
      60% {
        background: #aa4b6b;
      }
      80% {
        background: #6b6b83;
      }
      100% {
        background: #3b8d99;
      }
    }

    &--icon {
      padding: 4px;
      border-radius: 45px;
      animation: changeBackground 5s linear infinite;
    }

    // @keyframes gototop {
    //   0% {
    //     transform: translateY(-0.5rem);
    //   }
    //   100% {
    //     transform: translateY(1rem);
    //   }
    // }
  }
  .circle {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: -24px;
    left: 8px;
    z-index: -1;
  }

  .progress-circle {
    animation: fillCircle 1s linear forwards;
  }

  @keyframes fillCircle {
    to {
      strokedashoffset: 0;
    }
  }
`;

export default GoToTop;
