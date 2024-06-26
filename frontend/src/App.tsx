import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/errors/PageNotFound";
import { Auth } from "./routes/Auth";

export const App: () => JSX.Element = (): JSX.Element => {
  return (
    <div className="justify-center flex items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
