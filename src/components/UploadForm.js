import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file.");
    }
  };
  return (
    <form action="" className="upload__form">
      <div>
        <label className="upload__label">
          <input type="file" onChange={changeHandler} />
          <p>Upload Image</p>
          <BiImageAdd className="upload__icon" />
        </label>
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file__name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
