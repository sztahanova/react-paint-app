import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "./WindowSize";

const Canvas = (props) => {
  const [drawing, setDrawing] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const canvasRef = useRef();
  const ctx = useRef();

  // needed to persist drawing on resize
  const inMemCanvasRef = useRef(document.createElement("canvas"));
  const inMemCtx = useRef();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    inMemCtx.current = inMemCanvasRef.current.getContext("2d");
  }, []);

  useEffect(() => {
    ctx.current.fillStyle = "#ffffff";
    ctx.current.fillRect(0, 0, width, height);
    ctx.current.drawImage(inMemCanvasRef.current, 0, 0);
  }, [width, height]);

  useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  const handleMouseMove = (event) => {
    drawLine(event.clientX, event.clientY);
  };

  function drawLine(posX, posY) {
    // actual coordinates
    const coords = [
      posX - canvasRef.current.offsetLeft,
      posY - canvasRef.current.offsetTop,
    ];

    if (drawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
    }

    if (props.handleMouseMove) {
      props.handleMouseMove(...coords);
    }
  }

  function startDrawing(posX, posY) {
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";
    ctx.current.lineWidth = props.lineWidth;
    ctx.current.strokeStyle = props.color;
    ctx.current.beginPath();

    console.log(posX, posY);

    // actual coordinates
    ctx.current.moveTo(
      posX - canvasRef.current.offsetLeft,
      posY - canvasRef.current.offsetTop
    );

    setDrawing(true);
  }

  const handleMouseDown = (event) => {
    startDrawing(event.clientX, event.clientY);
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setDrawing(false);

    inMemCanvasRef.current.width = canvasRef.current.width;
    inMemCanvasRef.current.height = canvasRef.current.height;
    inMemCtx.current.drawImage(canvasRef.current, 0, 0);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startDrawing(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    drawLine(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e) => {
    stopDrawing();
  };

  return (
    <React.Fragment>
      <canvas
        ref={canvasRef}
        width={props.width || width}
        height={props.height || height}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      />
    </React.Fragment>
  );
};

export default Canvas;
