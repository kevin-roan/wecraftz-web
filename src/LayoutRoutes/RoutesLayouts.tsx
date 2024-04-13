import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import AddProduct from "../pages/AddProduct";
import BottomLayout from "../components/BottomLayout";
import GraphContainer from "../components/GraphContainer";

const RoutesLayouts = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route
          path="/"
          element={
            <BottomLayout>
              <GraphContainer />
            </BottomLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <BottomLayout>
              <GraphContainer />
            </BottomLayout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <BottomLayout>
              <AddProduct />
            </BottomLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesLayouts;
