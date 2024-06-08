import MainLayout from "./MainLayout";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </div>
  );
}

export default App;
