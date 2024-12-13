import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from './Components/Loading.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from './Pages/LandingPage.jsx';
import { delayImport } from './Helpers/Delay.js'
import store from './store.js'
import { Provider } from 'react-redux'

const Landing = lazy(delayImport(() => import('./Pages/LandingPage.jsx'), 2000));


const router = createBrowserRouter([
  {path: "/", element: <Landing />,
    children: [
      {
        
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
