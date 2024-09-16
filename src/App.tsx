import { useDispatch, useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import { Routes as appRoutes } from "./Routes/Routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import LottieLoader from "./loader/LottieLoader";
import { setLoading } from "./redux/slices/userSlice";
import AuthenticatedRoute from "./Routes/AuthenticatedRoutes";
import Header from "./components/views/Header";

function App() {
  // const dispatch = useDispatch();
  // dispatch(setLoading(false));
  const params = useParams();

  // `useLocation` gives access to the entire URL including the query parameters
  const location = useLocation();

  // Capture the path segments
  const segments = location.pathname.split("/").filter(Boolean);
  const isAuthenticated = useSelector(
    (state: any) => state.user.isAuthenticated
  );
  console.log(segments);
  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>
        {appRoutes.map((route) => {
          console.log(
            route.protected ? `${segments[0]}${route.path}` : route.path
          );
          return (
            <Route
              key={route.key}
              path={
                route.protected ? `${segments[0]}${route.path}` : route.path
              }
              element={
                route.protected ? (
                  <AuthenticatedRoute component={route.component} />
                ) : (
                  <route.component />
                )
              }
            />
          );
        })}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return <App />;
}
