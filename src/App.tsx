import ListGroup from "./component/ListGroup";

function App() {
  let Citys = ["Mumbai", "Delhi", "Hydrabad", "Channai", "UP"];

  return (
    <div>
      <ListGroup items={Citys} heading="Cities" />
    </div>
  );
}

export default App;
