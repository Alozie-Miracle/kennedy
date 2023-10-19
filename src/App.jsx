import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import { Layout } from "./pages/Layout";
import { LazyLoadedExample } from "./pages/LazyLoadedPage";

function App() {
  const helmetContext = {};
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="lazyLoad" element={<LazyLoadedExample />} />
      </Route>
    )
  );
  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}

export default App;
