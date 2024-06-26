import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as  React from "react";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
