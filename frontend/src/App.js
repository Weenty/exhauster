import React from 'react'
import logo from './logo.svg';
import Sidebar_new from './components/Sidebar';
import Header from './components/Header';
import Chart from './components/Chart';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Dropdown from 'react-dropdown';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-dropdown/style.css';
import './App.css';
import Allexgaut from './pages/Allexgaut';
import Sertainexgaut from './pages/Sertainexgaut';
import Statistic from './pages/Statistic';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
// import socket from './socket';

// const io = require('socket.io-client');
// const socket = io('https://FloralwhiteCheeryDominspector.flaky12r.repl.co');

// socket.on('connect', () => {
//   console.log('Connected to server');
// });

// socket.on('stream', (data) => {
//   //здесь будут данные приходить каждую минуту
//   console.log((data));
// });

// socket.emit('start_stream');

function App() {


  const [data, setData] = useState([]);

  // const io = require('socket.io-client');
  const socket = io('https://FloralwhiteCheeryDominspector.flaky12r.repl.co');

  socket.on('connect', () => {
    console.log('Connected to server');
  });
  socket.emit('start_stream')
  useEffect(() => {
    socket.on('stream', (chek) => {
      setData(chek);
      
      console.log("Chek", (chek));
    });
  }, []);
  console.log("Data", (data));
  
  let i = "Sera"
  let r = 13
  return (


    <div className="App">


      <Router>
        <Routes>
          <Route path='/' element={<Allexgaut test={i} test2={r} testdata={data.slice(1)} />}></Route>
          <Route path='/sertain' element={<Sertainexgaut testdata={data.slice(1)} />}>   </Route>
          <Route path='/stat' element={<Statistic testdata={data.slice(1)} timedata={data} />}>   </Route>
        </Routes>
      </Router>



      {/* <Allexgaut>

      </Allexgaut> */}


      {/* <Container className="main_container">

        <Header exg1={<div>yyyyyyyyyyyyuuuuuuuu</div>}></Header>

        <Sidebar_new></Sidebar_new>

      </Container> */}


    </div>



  );
}

export default App;
