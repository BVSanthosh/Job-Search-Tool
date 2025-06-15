import type { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/:companyName",
    element: <CompanyPage/>
  }
]
const router = createBrowserRouter(routes);

const App: FC = () => {  
  return <RouterProvider  router={router}/>
}

export default App;