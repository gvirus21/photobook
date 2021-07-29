import "./App.css";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import UploadForm from "./components/UploadForm";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Logo />
      <Heading />
      <UploadForm />
      <Grid />
    </div>
  );
}

export default App;
