import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Dropdown from 'react-dropdown';
import Sertainexgaut from '../pages/Sertainexgaut';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-dropdown/style.css';
import './Cards.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DateVid() {

    const [startDate, setStartDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    const [compileDate, setcompileDate] = useState('')
    console.log("Начало", startDate);
    console.log("Конец", finalDate);


    // async componentDidMount() {
    //     // POST request using fetch with async/await
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     const response = await fetch('https://reqres.in/api/posts', requestOptions);
    //     const data = await response.json();
    //     setState({ postId: data.id });
    // }

    function compile() {
        let i = ["", ""]
        i[0] = startDate
        i[1] = finalDate

        setcompileDate(i)
    }
    console.log("Сборка", compileDate);

    function sendDateToBack() {

        console.log("Отправленно")

        // Send data to the backend via POST
        // fetch('http://------------:8080/', {  // Enter your IP address here

        //     method: 'POST',
        //     mode: 'cors',
        //     body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

        // })

    }


    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
                dateFormat="Pp" />
            <DatePicker selected={finalDate} onChange={(date) => setFinalDate(date)} showTimeSelect
                dateFormat="Pp" />
            {/* <button onClick={compile}>Скомпилировать</button> */}
            <button onClick={() => {
                compile();
                sendDateToBack();
            }}>Отправка</button>
        </div>


    )
}
