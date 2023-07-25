import MessageTypes, { CreateShapes } from "../messageTypes";

const App = () => {
  const handleOnClick = () => {
    const payload: CreateShapes = {
      type: MessageTypes.CREATE_SHAPES,
      count: 2,
    };

    parent.postMessage({ pluginMessage: payload }, "*");
  };

  return (
    <div>
      <span>Hello world!</span>
      <button onClick={handleOnClick}>Click me!</button>
    </div>
  );
};

export default App;
