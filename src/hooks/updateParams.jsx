import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATED: "update_rate",
  UPDATE_SUB_TYPE: "update_subType",
  UPDATE_DAY: "update_day"
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
    case ACTIONS.UPDATE_SUB_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case ACTIONS.UPDATE_DAY:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default function useForm({ initialKeyword, initialRated, initialSubType, initialDay }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rated: initialRated,
    subType: initialSubType,
    day: initialDay,
  });

  const { keyword, rated, subType, day } = state;

  return {
    keyword,
    rated,
    subType,
    day,
    updateKeyword: (keyword) =>
      dispatch({
        subType: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    updateRated: (rated) =>
      dispatch({
        subType: ACTIONS.UPDATE_RATED,
        payload: rated,
      }),
    updateType: (subType) =>
      dispatch({
        subType: ACTIONS.UPDATE_SUB_TYPE,
        payload: subType,
      }),
    updateDay: (day) =>
      dispatch({
        subType: ACTIONS.UPDATE_DAY,
        payload: day,
      }),
  };
}
