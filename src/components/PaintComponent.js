import React, { useState, useEffect, useRef, useCallback } from "react";
import randomColor from "randomcolor";
import Name from "./NameComponent";
import ColorPicker from "./ColorPickerComponent";
import Canvas from "./CanvasComponent";
import RefreshButton from "./RefreshButtonComponent";
import useWindowSize from './WindowSize';

const Paint = () => {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState();
  const [windowSizeVisible, setWindowSizeVisible] = useState(false);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWindowSizeVisible(true);
    clearTimeout(timeoutId);
    timeoutId.current = setTimeout(() => setWindowSizeVisible(false), 500);
  });

  const headerRef = useRef({ offsetHeight: 0 });
  const timeoutId = useRef();

  useEffect(() => getColors(), []);

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((res) => res.json())
      .then((res) => {
        setColors(res.colors.map((color) => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);

  

  return (
    <div>
      <header
        ref={headerRef}
        style={{
          borderTop: `10px solid ${activeColor}`,
        }}
      >
        <div>
          <Name />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <RefreshButton cb={getColors} />
        </div>
      </header>
      {activeColor && (
        <Canvas
          color={activeColor}
          height={window.innerHeight - headerRef.current.offsetHeight}
        />
      )}
      <div className={`window-size ${windowSizeVisible ? "" : "hidden"}`}>
        {windowWidth} x {windowHeight}
      </div>
    </div>
  );
};

export default Paint;
