import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const handleButtonClick = () => {
    setIsLoading(true);
    setIsDisable(true);
    setTimeout(() => {
      alert("Button clicked");
      setIsLoading(false);
      setIsDisable(false);
    }, 2000);
  };
  return (
    <>
      <Button
        label="submit"
        onClick={handleButtonClick}
        isLoading={isLoading}
        disabled={isDisable}
      />
    </>
  );
}

export default App;
