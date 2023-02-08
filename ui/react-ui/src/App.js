import "./App.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
// import { colors } from "./consts/colors";

function App() {
  const onClick = async () => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(5000);
    // setTimeout(() => {
    //   console.log("click");
    // }, 3000);
  };
  return (
    <div className="App">
      <Header />
      <Button
        isPrimary={false}
        /*backgroundColor={colors.green}*/
        onClick={onClick}
      >
        abc
      </Button>
      <Button
        isPrimary={true}
        /*backgroundColor={colors.green}*/
        onClick={onClick}
      >
        def
      </Button>
    </div>
  );
}

export default App;
