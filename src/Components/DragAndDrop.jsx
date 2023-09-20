import { useEffect, useState } from "react";

export default function DragAndDrop(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [xTranslate, setXTranslate] = useState(0);
  const [yTranslate, setYTranslate] = useState(0);
  const [initialMousePosition, setInitialMousePosition] = useState({});

  const onMouseDown = ({ clientX, clientY }) => {
    setInitialMousePosition({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      setXTranslate(xTranslate + e.clientX - initialMousePosition.x);
      setXTranslate(yTranslate + e.clientY - initialMousePosition.y);
    };
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDragging, initialMousePosition]);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    window.removeEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <div
      style={{ transform: `translate(${xTranslate}px, ${yTranslate}px)` }}
      onMouseDown={onMouseDown}
    >
      {props.children}
    </div>
  );

}
