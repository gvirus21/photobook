import React from "react";
import UseFirestore from "../hooks/UseFirestore";

const Grid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="pic" />
            {console.log(docs.url)}
          </div>
        ))}
      {console.log(docs)}
    </div>
  );
};

export default Grid;
