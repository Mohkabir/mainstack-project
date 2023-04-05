import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts";
import OtherPages from "../pages/OtherPages";
import Dashboard from "../pages/Dashboard";

const AllRoutes = () => {
  const location = useLocation();
  const otherRoutes: string[] = [
    "/item-one",
    "/item-two",
    "/item-three",
    "/item-four",
    "/item-five",
    "/item-six",
    "/item-seven",
    "/item-eight",
  ];

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes>

      {/* <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes> */}
      {/* other unavailable routes */}
      {otherRoutes.includes(location.pathname) && (
        <Routes>
          <Route
            path={`/${location.pathname}`}
            element={
              <MainLayout>
                {otherRoutes.includes(location.pathname) && <OtherPages />}
              </MainLayout>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default AllRoutes;
