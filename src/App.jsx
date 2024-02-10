import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import CharacterPage from './components/CharacterPage/CharacterPage';
import Chat from './components/Chat';
import Search from './components/Search';
import Situation from './components/Situation';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/main" element={<MainPage />}></Route>
					<Route path='/character' element={<CharacterPage/>}></Route>
					<Route path='/page/chat' element={<Chat/>}></Route>
					<Route path='/page/search' element={<Search/>}></Route>
					<Route path='/page/situation' element={<Situation/>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage />},
//   {
//     element: <RootLayout />,
//     id: 'root',
//     children: [
//       {path: 'main', element: <MainPage/>},
//       {path: 'character', element: <CharacterPage/>},
//       {
//         path: 'page', 
//         element: <ChatLayout/>,
//         children: [
//           {path:'chat', element: <Chat/>},
//           {path:'search', element: <Search/>},
//           {path:'situation', element: <Situation/>}
//         ]
//       }
//     ]
//   }
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
