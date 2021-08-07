import React, { useEffect } from "react";
import UseStorage from "../hooks/UseStorage";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = UseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar-container">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
