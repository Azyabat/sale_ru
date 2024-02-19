import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesList } from "routes";
import "antd/dist/antd.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <Router>
        <RoutesList />
    </Router>
);
