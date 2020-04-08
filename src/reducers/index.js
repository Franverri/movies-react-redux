import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "REMOVE_ARTICLE") {
    return Object.assign({}, state, {
      articles: state.articles.filter(item => item.title !== action.payload.title)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: (action.payload.Search)
    });
  }
  return state;
}

export default rootReducer;
