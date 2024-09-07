import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { StyledApp } from './App.Style'
import { Header } from './Components/Header/Header';
import { ErrorPage } from './Pages/Error Page/ErrorPage'
import { News } from './Pages/News/News';
import { StockMarketNewsPage } from './Pages/StockMarket/StockMarketNewsPage'
import { ContainerNewsPage } from './Pages/News Page/ContainerNewsPage';
import { AddingItNews } from './Pages/Admin panel/AdminPanel';
import { CompanyPage } from './Pages/Сompany page/CompanyPage'
import { ContainerStockMarket } from './Pages/StockMarket/ContainerStockMarket'
import { CompanyStock } from "./Pages/Company Stock/CompanyStock";
import { ExchangeRate } from "./Pages/Exchange Rate/ExchangeRate"

function App() {
  const[environment, setEnvironment] = useState(true)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header environment={environment} setEnvironment={setEnvironment}/>,
      errorElement: <ErrorPage />,
      children: [
        {
        path: '/',
        element: <News />,
      },
      {
        path: '/fin-news/:page/:start/:end',
        element: <StockMarketNewsPage />,
      },
      {
        path: '/news/:newsid',
        element: <ContainerNewsPage />,
      },
      {
        path: '/stock-news/:newsid',
        element: <ContainerStockMarket/>,
      },
      {
        path: '/company',
        element: <CompanyPage changeColor={environment}/>,
      },
      
      {
        path: '/stock/:page/:start/:end',
        element: <CompanyStock changeColor={environment}/>,
      },
      {
        path: '/admin',
        element: <AddingItNews />,
      },
      {
        path: '/admin/:action',
        element: <AddingItNews />,
      },
      {
        path: '/currencies',
        element: <ExchangeRate changeColor={environment}/>,
      },
      
    ]
    },
  ]);
  return (
    <StyledApp $stylesubject={environment}>
      <RouterProvider router={router} />
    </StyledApp>
  );
}

export default App;
