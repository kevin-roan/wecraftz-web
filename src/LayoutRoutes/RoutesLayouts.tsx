import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";
import AddProduct from "../pages/AddProduct";
import BottomLayout from "../components/BottomLayout";
import GraphContainer from "../components/GraphContainer";
import SignUp from "../pages/Signup";
import Table from "../components/Table";
import PrivateRoutes from "./PrivateRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export interface User {
  uid: string;
  email: string;
}

const RoutesLayouts = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser as User);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Home />
      <Routes>
        <Route
          path="/signup"
          element={
            <BottomLayout>
              <SignUp />
            </BottomLayout>
          }
        />

        <Route
          path="/login"
          element={
            <BottomLayout>
              <Login />
            </BottomLayout>
          }
        />
        <Route element={<PrivateRoutes isUser={user} />}>
          <Route
            path="/dashboard"
            element={
              <BottomLayout>
                <GraphContainer />
              </BottomLayout>
            }
          />
          <Route
            path="/products"
            element={
              <BottomLayout>
                <Table />
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
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesLayouts;
