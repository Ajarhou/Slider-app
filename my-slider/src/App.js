import { useRef, useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import images from "./images";

function App() {
  const carousselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log( carousselRef.current.scrollWidth - carousselRef.current.offsetWidth)
    setWidth(
      carousselRef.current.scrollWidth - carousselRef.current.offsetWidth
    );
  }, []);

  return (
    <div>
      <motion.div
        ref={carousselRef}
        className="caroussel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-caroussel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="caroussel-image" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
