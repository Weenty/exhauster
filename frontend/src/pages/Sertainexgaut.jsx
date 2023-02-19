import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-dropdown/style.css';
import './Sertainexgaut.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import exgbackground from './images/exgaut_exsample.png'
import oil from './images/oil_norm.png'
import Datch_card from '../components/Datch_card';
import Header from '../components/Header';
import SecSwitch from '../components/SecSwitch';
// import data from '../result.json';
// data.shift()

export default function Sertainexgaut(props) {
    let t = 0;


    const [firstexg, setfirstexg] = useState(0);

    function change1() {
        setfirstexg(0)
    }
    function change2() {
        setfirstexg(1)
    }
    function change3() {
        setfirstexg(2)
    }
    function change4() {
        setfirstexg(3)
    }
    function change5() {
        setfirstexg(4)
    }
    function change6() {
        setfirstexg(5)
    }
    console.log(firstexg)
    return (



        <div >
            <Header></Header>
            <SecSwitch></SecSwitch>

            <div>
                <button onClick={change1}>"Эксгаустер №1</button>
                <button onClick={change2}>"Эксгаустер №2</button>
                <button onClick={change3}>"Эксгаустер №3</button>
                <button onClick={change4}>"Эксгаустер №4</button>
                <button onClick={change5}>"Эксгаустер №5</button>
                <button onClick={change6}>"Эксгаустер №6</button>
            </div>

            <img src={exgbackground}></img>



            <div className='datch_cont'>

                {/* {console.log(data)} */}


                {props.testdata[firstexg].values.map((number) => {

                    // if (data.time !== undefined) {
                    //     return
                    // }
                    t++

                    if (number.vibration_axial == undefined) {
                        number.vibration_axial = {}
                        number.vibration_axial.value = undefined
                    }

                    if (number.vibration_horizontal == undefined) {
                        number.vibration_horizontal = {}
                        number.vibration_horizontal.value = undefined
                    }

                    if (number.vibration_vertical == undefined) {
                        number.vibration_vertical = {}
                        number.vibration_vertical.value = undefined
                    }

                    return <Datch_card name={t}
                        temper={number.temperature.value.toFixed(2)}
                        vibros={number.vibration_axial.value == undefined ? undefined : number.vibration_axial.value.toFixed(2)}
                        vibrhor={number.vibration_horizontal.value == undefined ? undefined : number.vibration_horizontal.value.toFixed(2)}
                        vibrvetr={number.vibration_vertical.value == undefined ? undefined : number.vibration_vertical.value.toFixed(2)}></Datch_card>


                })}
            </div>

        </div>

    )

}