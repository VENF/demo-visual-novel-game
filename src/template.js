// platilla de datos, donde va el texto de cada pagina, sus preguntas y respuestas

// Instrucciones
// 1 - campo text -> este es el texto principal de cada pagina, y se mostrara en primer lugar
// 2 - campo questions -> este campo es un objeto, donde iran las preguntas y se debe enumerar 1: {}

// Instrucciones del objeto questions
// 1 - este objeto tiene 3 propidades 
// (ask -> texto donde ira la pregunta) 
// (response -> array donde iran el texto de respuesta a esa pregunta)
// (end -> especificar si es el final de la pregunta , en caso de ser el final colocar su valor en true)
// (redirect -> especificar, una vez sea el final de la pregunta, a donde quieres que vaya el usuario ej: redirect: "/someroute" )
//Nota:
// en caso de que alguna pregunta, no sea el final ej. ver pregunta 1: {...} de la plantilla
// se debera omitir las propiedades end y redirect, y se le asignara otro objeto questions con las propiedades anterior mensionadas
// ver ej en la plantilla llamada data

export const data = {
  root: {
    text: [],
    questions: {
      1: {
        ask: "",
        response: [],
        questions: {
          1: {
            ask: "",
            response: [],
            end: true,
            redirect: "",
          },
          2: {
            ask: "",
            response: [],
            end: true,
            redirect: "",
          },
        },
      },
      2: {
        ask: "",
        response: [],
        end: true,
        redirect: "",
      },
      3: {
        ask: "",
        response: [],
        end: true,
        redirect: "",
      },
    },
  },
};
