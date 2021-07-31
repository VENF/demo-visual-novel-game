import Home from "../pages/home/index"
import Exploration from "../pages/exploration/index"
import Garrison from "../pages/garrison/index"
import Otra from "../pages/otra/index"

export const routes = [
  { path: "/", key: "home", page: Home },
  { path: "/exploration", key: "exploration", page: Exploration },
  { path: "/garrison", key: "garrison", page: Garrison  },
  { path: "/otra", key: "otra", page: Otra  },
];
