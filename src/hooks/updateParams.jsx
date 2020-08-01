import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATED: "update_rate",
  UPDATE_TYPE: "update_type",
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
    case ACTIONS.UPDATE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default function useForm({ initialKeyword, initialRated, initialType }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rated: initialRated,
    type: initialType,
  });

  const { keyword, rated, type } = state;

  return {
    keyword,
    rated,
    type,
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
    updateType: (type) =>
      dispatch({
        type: ACTIONS.UPDATE_TYPE,
        payload: type,
      }),
  };
}
