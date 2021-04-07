import './index.css';
import Navi from "./components/navi";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <div>
        {/* <Navi /> */}
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
