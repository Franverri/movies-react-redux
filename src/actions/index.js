import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
  return { type: "REMOVE_ARTICLE", payload };
}

export function getData(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
