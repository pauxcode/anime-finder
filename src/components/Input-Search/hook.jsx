import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATED: "update_rate",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case ACTIONS.UPDATE_RATED:
      return {
        ...state,
        rated: action.payload,
      };
    default:
      return state;
  }
};

export default function useForm({ initialKeyword, initialRated }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rated: initialRated,
  });

  const { keyword, rated } = state;

  return {
    keyword,
    rated,
    updateKeyword: (keyword) =>
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    updateRated: (rated) =>
      dispatch({
        type: ACTIONS.UPDATE_RATED,
        payload: rated,
      }),
  };
}
