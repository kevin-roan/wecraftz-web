import RoutesLayouts from "./LayoutRoutes/RoutesLayouts";
import { storage, uploadBytes } from "./Helpers/firebaseFirestore.js";
import Counter from "./Redux/Counter.js";

const App = () => {
  return (
    <div>
      bhai
      <Counter />
    </div>
  );
};

export default App;
