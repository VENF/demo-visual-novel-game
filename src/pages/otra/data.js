const name = localStorage.getItem("name"); // asi se optiene el nombre guardado
// para colocar el nombre en un texto se debe usar `` en lugar de "" y dentro colcar ${}
// lo cual quedaria `Hola ${name} saludos !` 

export const data = {
  root: {
    text: [
      `Hola ${name} este es el text principal...`,
      "Y estas por comenzar una aventura...",
    ],
    questions: {
      1: {
        ask: "pregunta 1",
        response: ["esta es la respuesta", "de la pregunta 1"],
        questions: {
          1: {
            ask: "pregunta 1.1",
            response: ["esta es la respuesta", "de la pregunta 1.1"],
            end: true,
            redirect: "/garrison",
          },
          2: {
            ask: "pregunta 1.2",
            response: ["esta es", "la respuesta", "de la pregunta 1.2"],
            end: true,
            redirect: "/exploration",
          },
        },
      },
      2: {
        ask: "pregunta 2",
        response: ["esta es la respuesta", "de la pregunta 2"],
        end: true,
        redirect: "/exploration",
      },
      3: {
        ask: "pregunta 3",
        response: ["esta es", "la respuesta", "de la pregunta 1"],
        end: true,
        redirect: "/otra",
      },
    },
  },
};
