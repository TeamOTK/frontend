import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import HomePage from './components/HomePage';
import RootLayout from './components/Layout/RootLayout';
import ChatLayout from './components/Layout/ChatLayout';
import MainPage from './components/MainPage';
import CharacterPage from './components/CharacterPage';
import Chat from './components/Chat';
import Search from './components/Search';
import Situation from './components/Situation';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  {
    element: <RootLayout />,
    id: 'root',
    children: [
      {path: 'main', element: <MainPage/>},
      {path: 'character', element: <CharacterPage/>},
      {
        path: 'page', 
        element: <ChatLayout/>,
        children: [
          {path:'chat', element: <Chat/>},
          {path:'search', element: <Search/>},
          {path:'situation', element: <Situation/>}
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
