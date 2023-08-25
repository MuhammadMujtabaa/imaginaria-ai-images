import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../layout";
import LazyLoaderSpinner from "../components/lazyLoaderSpinner";

const delayTime = 1000;
const AppRoutes = () => {
  const routes = [
    // {
    //   id: "1",
    //   path: "/",
    //   component: lazy(() => {
    //     return new Promise((resolve) => {
    //       setTimeout(() => resolve(import("../pages/Home/index")), delayTime);
    //     });
    //   }),
    //   nestedPaths: [],
    // },
    {
      id: "2",
      path: "/",
      component: lazy(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(import("../pages/AboutUs")), delayTime);
        });
      }),
      nestedPaths: [],
    },

    {
      id: "4",
      path: "/contact-us",

      component: lazy(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(import("../pages/ContactUs")), delayTime);
        });
      }),
      nestedPaths: [],
    },
  ];

  return (
    <Fragment>
      <>
        <Routes>
          {routes?.map((item) => (
            <Route
              key={item?.id}
              path={item?.path}
              element={
                <Suspense fallback={<LazyLoaderSpinner />}>
                  <Header />
                  <item.component />
                  <Footer />
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
    </Fragment>
  );
};

export default AppRoutes;
