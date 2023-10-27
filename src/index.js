import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './layout/home/Home';
import ProtectedRoutes from './auth/ProtectedRoutes';
import RouteExplore from './routes/RouteExplore';
import RouteCommunities from './routes/RouteCommunities';
import RouteNotification from './routes/RouteNotification';
import RouteMessage from './routes/RouteMessage';
import RouteBookmark from './routes/RouteBookmark';
import RouteProfile from './routes/RouteProfile';
import RouteComment from './routes/RouteComment';
import App from './App';
import { Toaster } from 'react-hot-toast';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import RouteViewProfile from './routes/RouteViewProfile';
import {io}  from 'socket.io-client';
const ENDPOINT = 'http://localhost:4000/'
// if(process.env.NODE_ENV === 'production'){
//   disableReactDevTools()
// }
const socket = io(ENDPOINT, {transports: ["websocket","polling"]})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
       <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<App socket={socket}/>} />
            <Route path='/explore' element={<RouteExplore/>} />
            <Route path='/communities' element={<RouteCommunities/>} />
            <Route path='/notification' element={<RouteNotification socket={socket}/>} />
            <Route path='/message' element={<RouteMessage/>} />
            <Route path='/bookmark' element={<RouteBookmark/>} />
            <Route path='/profile/:id' element={<RouteProfile socket={socket}/>} />
            <Route path='/comments' element={<RouteComment socket={socket}/>}/>
            <Route path='/ViewProfile' element={<RouteViewProfile/>}/>
          </Route>
          <Route path='/' element={<Home/>}/>
        </Routes> 
      </BrowserRouter>
      <Toaster/>
    </Provider>
  </React.StrictMode>
);
