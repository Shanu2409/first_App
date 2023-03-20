import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup";

function App() {
  // let Citys = ["Mumbai", "Delhi", "Hydrabad", "Channai", "UP"];

  const handle = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button onC={handle}>warning</Button>
      {/* <ListGroup items={Citys} heading="Cities" onSelectItem={handle} /> */}
    </div>
  );
}

export default App;
