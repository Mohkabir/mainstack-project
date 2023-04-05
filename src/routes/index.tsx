import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layouts";
import OtherPages from "../pages/OtherPages";
import DashboardPage from "../pages/Dashboard";
import { useEffect } from "react";

const AllRoutes = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
      </Routes>
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
