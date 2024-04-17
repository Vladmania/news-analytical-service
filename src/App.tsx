import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { StyledApp } from './App.Style'
import { Header } from './Components/Page Header/Header';
import { ErrorPage } from './Components/Error Page/ErrorPage'
import { AllNews } from './Components/All News/AllNews';
import { StockMarketNewsPage } from './Components/StockMarketNewsPage/StockMarketNewsPage'
import { NewsPage } from './Components/News Page/NewsPage';
import { AddingItNews } from './Components/Admin panel/AddingITNews';


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
        element: <AllNews />,
      },
      {
        path: '/fin-news',
        element: <StockMarketNewsPage />,
      },
      {
        path: '/news/:newsid',
        element: <NewsPage />,
      },
      {
        path: '/admin',
        element: <AddingItNews />,
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
