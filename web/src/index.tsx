import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/reset.css";
import { RoutesList } from "routes";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
    <Router basename="/">
        <RoutesList />
    </Router>
);
