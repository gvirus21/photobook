import React from "react";
import UseFirestore from "../hooks/UseFirestore";
import { motion } from "framer-motion";

const Grid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            {console.log(docs.url)}
          </motion.div>
        ))}
      {console.log(docs)}
    </div>
  );
};

export default Grid;
