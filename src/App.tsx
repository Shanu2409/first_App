import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup";

function App() {
  // let Citys = ["Mumbai", "Delhi", "Hydrabad", "Channai", "UP"];

  const handle = () => {
    setState(!isVisible);
    console.log("Clicked");
  };
  const [isVisible, setState] = useState(false);

  return (
    <div>
      <Button color="secondary" onC={handle}>
        warning
      </Button>
      {isVisible && (
        <Alert
          onClose={() => {
            setState(false);
            console.log("closed");
          }}
        >
          My alert
        </Alert>
      )}
      {/* <ListGroup items={Citys} heading="Cities" onSelectItem={handle} /> */}
    </div>
  );
}

export default App;
