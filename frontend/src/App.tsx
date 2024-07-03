import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/errors/PageNotFound";
import { Auth } from "./routes/Auth";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Record } from "./pages/Record";
import { Accounting } from "./pages/Accounting";
import { Operations } from "./pages/Operations";
import { Report } from "./pages/Report";
import { Transaction } from "./pages/Transaction";
import { toastOptions } from "./configs/toastConfig";
import { NavLayout } from "./layouts/NavLayout";
import { MyAccount } from "./pages/MyAccount";
import { useState } from "react";
import { GraphContext } from "./contexts/graphContext";

export const App: () => JSX.Element = (): JSX.Element => {
  const [graph, setGraph] = useState("month");

  return (
    <GraphContext.Provider value={{ graph, setGraph }}>
      <div className="justify-center flex items-center h-screen">
        <Toaster toastOptions={toastOptions} />
        <BrowserRouter>
          <Routes>
            <Route path="/auth/*" element={<Auth />}></Route>
            <Route
              path="/"
              element={
                <NavLayout>
                  <Home />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/record"
              element={
                <NavLayout>
                  <Record />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/accounting"
              element={
                <NavLayout>
                  <Accounting />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/operations"
              element={
                <NavLayout>
                  <Operations />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/report"
              element={
                <NavLayout>
                  <Report />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/transaction"
              element={
                <NavLayout>
                  <Transaction />
                </NavLayout>
              }
            ></Route>
            <Route
              path="/myaccount"
              element={
                <NavLayout>
                  <MyAccount />
                </NavLayout>
              }
            ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </GraphContext.Provider>
  );
};
