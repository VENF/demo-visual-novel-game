// aqui se importan todas las paginas creadas en la carpeta pages

import Home from "../pages/home/index"
import Exploration from "../pages/exploration/index"
import Garrison from "../pages/garrison/index"
import Otra from "../pages/otra/index"

// se añade la ruta corespondiente siguiendo el ejemplo
// { path: "/la ruta que quieras", key: "el nombre unico de la ruta", page: el componente de la pagina },

export const routes = [
  { path: "/", key: "home", page: Home },
  { path: "/exploration", key: "exploration", page: Exploration },
  { path: "/garrison", key: "garrison", page: Garrison  },
  { path: "/otra", key: "otra", page: Otra  },
];
