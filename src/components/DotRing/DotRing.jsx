import React, { useContext } from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const DotRing = () => {
    // 1.
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div style={{ left: `${x}px`, top: `${y}px` }} className={" ring " + cursorType }>
          <img src="3181705cfd8eb85e2eef81cd028af2a5.png" alt="" />
          </div>
        {/* <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}>
      </div> */}
      { <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div> }
    </>
  );
};

export default DotRing;