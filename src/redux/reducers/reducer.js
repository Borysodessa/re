import { combineReducers } from "redux";
import { filtersReducer } from "./flterReducer";
import { tasksReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
