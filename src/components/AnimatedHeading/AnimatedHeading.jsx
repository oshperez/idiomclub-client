import React, { useEffect, useLayoutEffect, useRef } from "react";

import "./AnimatedHeading.css";

const AnimatedHeading = ({ children }) => {
  const headingClassName = children.props.className;
  const headingText = children.props.children;
  const headingTag = children.type;
  const delay = 0.02;

  const headingRef = useRef(null);

  const spanArr = headingText.split("").map((letter, index) => {
    return React.createElement(
      "span",
      {
        key: `letter${index}`,
        className: "letter",
        style: letter === " " ? { width: "9px" } : {},
      },
      letter
    );
  });

  const heading = React.createElement(
    headingTag,
    { className: headingClassName, ref: headingRef },
    spanArr
  );

  useLayoutEffect(() => {
    const nodeArr = [...headingRef.current.childNodes];

    nodeArr.reduce((offset, elem, index, arr) => {
      if (index > 0) {
        let width = getComputedStyle(arr[index - 1]).width;
        let numericWidth = parseFloat(width.replace(/px/, ""));

        offset = offset + numericWidth + 5;

        if (index > 0) {
          elem.style.setProperty("left", `${offset}px`);
          elem.style.setProperty("animation-delay", `${delay * index}s`);
        }
      }
      return offset;
    }, 0);
  });

  useEffect(() => {
    const nodeList = headingRef.current.childNodes;

    // Reset animation by removing and then adding again the animation property
    
    const playAnimation = () => {
      for (let node of nodeList) {
        node.className = "letter";
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            node.className = "letter letter--moving";
          });
        });
      }
    };

    const intervalID = setInterval(playAnimation, 10 * 1000);
    return () => clearInterval(intervalID);
  });

  return heading;
};

export default AnimatedHeading;
