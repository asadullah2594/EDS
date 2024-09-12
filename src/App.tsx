import { useDispatch, useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import { Routes as appRoutes } from "./Routes/Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LottieLoader from "./loader/LottieLoader";
import { setLoading } from "./redux/slices/userSlice";

function App() {
  // const dispatch = useDispatch();
  // dispatch(setLoading(false));
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return <App />;
}
