// import SpinnerComponent from "components/spinner/spinnerComponent";
import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const AppRoutes = () => {
  const routes = [
    {
      id: "1",
      path: "/",
      component: lazy(() => import("../pages/home")),
      nestedPaths: [],
    },
    {
      id: "2",
      path: "/about-us",
      component: lazy(() => import("../pages/about")),
      nestedPaths: [],
    },
  ];

  return (
    <Fragment>
      <Header />
      <>
        <Routes>
          {routes?.map((item) => (
            <Route
              key={item?.id}
              path={item?.path}
              element={
                <Suspense
                // fallback={<SpinnerComponent />}
                >
                  <item.component />
                </Suspense>
              }
            >
              {item.nestedPaths.length &&
                item?.nestedPaths?.map((subItem) => (
                  <Route
                    key={subItem?.id}
                    path={subItem?.path}
                    element={
                      <Suspense>
                        <subItem.component />
                      </Suspense>
                    }
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </>
      <Footer />
    </Fragment>
  );
};

export default AppRoutes;
