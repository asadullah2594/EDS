import Header from "./components/views/Header";
import NotFound from "./pages/NotFound";
import { Routes as appRoutes } from "./Routes/Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
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
