import "./App.css";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Subtitle from "./components/Subtitle";
import UploadForm from "./components/UploadForm";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Logo />
      <Heading />
      <Subtitle />
      <UploadForm />
      <Grid />
    </div>
  );
}

export default App;
