import { configureStore} from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './root';

const observableMiddleware = createEpicMiddleware();

let middleware = [
  observableMiddleware,
];


const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

observableMiddleware.run(rootEpic);

export default store;
