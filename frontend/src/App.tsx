import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/errors/PageNotFound";
import { Auth } from "./routes/Auth";
import { Toaster } from "react-hot-toast";

export const App: () => JSX.Element = (): JSX.Element => {
  return (
    <div className="justify-center flex items-center h-screen">
      <Toaster
        toastOptions={{
          className: "",
          position: "bottom-right",
          style: {
            padding: "12px",
            color: "white",
            backgroundColor: "black",
          },
        }}
      />{" "}
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
