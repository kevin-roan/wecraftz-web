import RoutesLayouts from "./LayoutRoutes/RoutesLayouts";
import { storage, uploadBytes } from "./Helpers/firebaseFirestore.js";

const App = () => {
  return (
    <div>
      <RoutesLayouts />
    </div>
  );
};

export default App;
