import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Dropdown from 'react-dropdown';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-dropdown/style.css';
import './Allexgaut.css';
import Header from '../components/Header';
import exgimg from './images/Scheme.png'
import exgbutton from './images/button.png'
import temp from './images/temp_norm.png'
import vibr from './images/vibr_norm.png'
import oil from './images/oil_norm.png'
import Cards from '../components/Cards';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sertainexgaut from './Sertainexgaut';
import SecSwitch from '../components/SecSwitch';
// import data from '../result.json';
import getData from '../socket';
// import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import DateVid from '../components/DateVid';



// data = data.slice(1);



export default function Allexgaut(props) {


//    console.log(props.test)
//    console.log(props.test2)
   console.log("Get Data",props.testdata)

    // const [data, setData] = useState([]);

// // const io = require('socket.io-client');
// const socket = io('https://FloralwhiteCheeryDominspector.flaky12r.repl.co');

// socket.on('connect', () => {
//     console.log('Connected to server');
//   });
// socket.emit('start_stream')
//     useEffect(() => {
//         socket.on('stream', (chek) => {
//             setData(chek);
//             console.log((chek));
//         });
//       }, []);
//       console.log((data));

//     //   data.shift()


// const [data, setData] = useState([]);
// setData(props.testdata)

// // const datacheck = () => {
// //     props.testdata = data;
// //   }
//   console.log("acsept Data",data)


    return (
        <div className='container'>
            <Header></Header>
            <SecSwitch></SecSwitch>

            
            <div className='card_container'>
        
                {props.testdata.map((number) => {

                    // if (number.time !== undefined) {
                    //     return
                    // }
                    let arr = [];
                    let axvibrsign = []
                    let horvibrsign = []
                    let vertvibrsign = []
                    {
                        for (let i = 0; i < number.values.length; i++) {
                            // // console.log(data)
                            // console.log(number.values[i].vibration_axial.value)

                            if (number.values[i].vibration_axial == undefined) {
                                number.values[i].vibration_axial = {}
                                number.values[i].vibration_axial.signal = undefined
                            }
                            if (number.values[i].vibration_horizontal == undefined) {
                                number.values[i].vibration_horizontal = {}
                                number.values[i].vibration_horizontal.signal = undefined
                            }
                            if (number.values[i].vibration_vertical == undefined) {
                                number.values[i].vibration_vertical = {}
                                number.values[i].vibration_vertical.signal = undefined
                            }
                        
                            axvibrsign.push(number.values[i].vibration_axial.signal)
                            horvibrsign.push(number.values[i].vibration_horizontal.signal)
                            vertvibrsign.push(number.values[i].vibration_vertical.signal)
                            arr.push(number.values[i].temperature.signal)

                            // console.log(arr)
                        }
                    }
                    //   console.log(number.values.temperature.value)
                    return <Cards name={number.name} temper={arr} axvibr={axvibrsign} horvibr={horvibrsign} vert={vertvibrsign} ></Cards>
                })}

            </div>
        </div>



    )
}