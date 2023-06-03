import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './Routes.jsx';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './Redux/Store.jsx';
const router = createBrowserRouter(Routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
)
