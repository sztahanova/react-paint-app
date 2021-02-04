import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "./WindowSize";

const Canvas = (props) => {
  const [drawing, setDrawing] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const canvasRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.fillStyle = "#ffffff";
    ctx.current.fillRect(0, 0, width, height);
  }, []);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  const handleMouseMove = (event) => {
    // actual coordinates
    const coords = [
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop,
    ];

    if (drawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
    }

    if (props.handleMouseMove) {
      props.handleMouseMove(...coords);
    }
  };

  const startDrawing = (event) => {
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";
    ctx.current.lineWidth = 10;
    ctx.current.strokeStyle = props.color;
    ctx.current.beginPath();

    // actual coordinates
    ctx.current.moveTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );

    setDrawing(true);
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setDrawing(false);
  };

  return (
    <React.Fragment>
      <canvas
        ref={canvasRef}
        width={props.width || width}
        height={props.height || height}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={handleMouseMove}
      />
    </React.Fragment>
  );
};

export default Canvas;
