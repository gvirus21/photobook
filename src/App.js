import "./App.css";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import UploadForm from "./components/UploadForm";
import Grid from "./components/Grid";
import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <div className="App">
      <Logo />
      <Heading />
      <UploadForm />
      <Grid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} />}
    </div>
  );
}

export default App;
