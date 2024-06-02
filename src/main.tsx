import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "@/router/index"
// import App from './App.tsx'
import 'normalize.css/normalize.css'
// 状态管理
import { Provider } from 'react-redux'; 
import store from "@/store/index"
// import 'uno.css';
import "./main.less"
// import '@unocss/reset/normalize.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
