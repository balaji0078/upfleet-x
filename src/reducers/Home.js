import { HomeActionType } from "../ActionType";

const initialState = {
  data: {},
  themes:[1,2,3],
  selectedThemes:''

};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case HomeActionType.updateHomePageData:
      return {
        ...state,
        data: '',
        // themes,
        // selectedThemes
      };
    // case HomeActionType.AUTH_INFO: {
    //   return {
    //     ...state,
        
    //   };
    // }
    default:
      return state;
  }
};
