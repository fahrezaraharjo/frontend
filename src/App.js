import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage/SearchPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Details from './pages/Detail/Details';
import Admin from './pages/Admin/Admin';
import Single from './pages/Single/Single';
import List from './pages/List/List';
import ListHotel from './pages/List hotel/List';
import New from './pages/New/New';
import NewHotel from './pages/New hotel/NewHotel';
import Edit from './pages/edit/EditHotel'
import Singlehotel from './pages/hotels/Single';
import {  userInputs, hotelInputs } from "./formSource";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';

import { hotelColumns, userColumns } from "./datatablesource";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="users">
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
            <Route
              index
              element={

                <List columns={userColumns} />

              }
            />
            <Route index element={<List />} />

          </Route>

          <Route path="hotels">
            <Route path=":hotelId" element={<Singlehotel />} />
            <Route
              path="new"
              element={<NewHotel inputs={hotelInputs} title="Add New hotel" />
              }
            />
              <Route
              path="edit"
              element={<Edit inputs={hotelInputs} title="edit" />
              }
            />

            <Route
              index
              element={

                <ListHotel columns={hotelColumns} />

              }

            ></Route>

          </Route>
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Details/:id" element={<Details />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
