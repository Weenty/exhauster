import React from 'react'
import { useEffect } from 'react';
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
import Sidebar_new from '../components/Sidebar';
import Header from '../components/Header';
import './Statistic.css';
import DateVid from '../components/DateVid';
import Axios from 'axios';

import SecSwitch from '../components/SecSwitch';
// import maintimedata from '../back/timedata'; 
import {
    BarChart,
    Bar,
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';
import { useState } from 'react'
// import data from '../result.json';
import 'react-dropdown/style.css';




// const url = 'https://FloralwhiteCheeryDominspector.flaky12r.repl.co/get_data';
//     // работает долго, так как выводит дохуя
//     const data = {
//         "first": "2023-02-16T18:39:25.498636",
//         "last": "2023-02-17T18:39:25.498636"
//     };

//     //выведен одну дату, так как ты указал конкретный момент
//     const datadate = {
//           "first": "2023-02-16T18:39:25.498636",
//           "last": "2023-02-16T18:39:25.498636"
//       };

//     //формат даты используется %Y-%m-%dT%H:%M:%S.%f

//     const options = {
//         mode: 'no-cors',
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(datadate)
//     };

//      fetch(url, options)
//       .then(response => response.json())
//       .then(result => console.log((result)))
//       .catch(error => console.error(error));



export default function Statistic(props) {

    const [firstexg, setfirstexg] = useState(0);
    const [hidden2, setHidden2] = useState(true);
    const [hidden, setHidden] = useState(true);
    let t = 0;
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




    let chartData = []
    chartData.push(props.timedata[0].time)



    console.log("Chardata", chartData)

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);



    //   useEffect(() => {
    //     fetch(url, options)
    //       .then(res => res.json())
    //       .then((result) => setItems(result.items))
    //   }, [])

    // console.log("Items fetch",items)

    // useEffect(() => {
    //     fetch("https://api.example.com/items")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setItems(result);
    //         }

    //       )
    //   }, [])

    // console.log(firstexg)


    const url = 'https://FloralwhiteCheeryDominspector.flaky12r.repl.co/get_data';
    // работает долго, так как выводит дохуя
    const data = {
        "first": "2023-02-16T18:39:25.498636",
        "last": "2023-02-17T18:39:25.498636"
    };

    //выведен одну дату, так как ты указал конкретный момент
    const datadate = {
        "first": "2023-02-16T18:39:25.498636",
        "last": "2023-02-16T18:39:25.498636"
    };

    //формат даты используется %Y-%m-%dT%H:%M:%S.%f

    const options = {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datadate)
    };

    // let priomise = fetch(url, options)
    //     .then((response => {response.json()}))
    //     .then((result =>{console.log(result)}))
    //     .catch((error => {console.error(error)}));



    

    // const fetchData = () => {
    //     Axios.get("https://FloralwhiteCheeryDominspector.flaky12r.repl.co/get_data")
    // }


    function Press() {
      const axres = Axios.post("https://FloralwhiteCheeryDominspector.flaky12r.repl.co/get_data", { options })
        .then(response => {
          console.log(axres.response)
          
        })
    }

    //     const [items, setItems] = useState([]);

    //     useEffect(() => {

    //            .then(response => setItems(response));        

    //     }, []);      const article = { data };
    //         Axios.post(url, data)
       
    // }


    console.log("Время", props.timedata[0].time)
    console.log("Темп выбор", props.testdata[firstexg].values[firstexg].temperature.value)

    return (
        <div>
            <Header>
            </Header>
            <SecSwitch></SecSwitch>

            <DateVid></DateVid>
            <button onClick={Press} >Send data</button>
            <div>
                <button onClick={change1}>"Эксгаустер №1</button>
                <button onClick={change2}>"Эксгаустер №2</button>
                <button onClick={change3}>"Эксгаустер №3</button>
                <button onClick={change4}>"Эксгаустер №4</button>
                <button onClick={change5}>"Эксгаустер №5</button>
                <button onClick={change6}>"Эксгаустер №6</button>
            </div>
            <ProSidebarProvider>
                <Sidebar style={{ width: '400px', position: 'absolute' }}>
                    <Menu>
                        <SubMenu label={props.testdata[firstexg].name}>
                            {/* {
                                data[firstexg]["Охладитель"].map((oilnum) => {
                                    let counter = 0
                                    counter++
                                    console.log(counter)
                                    console.log(oilnum)
                                    return 0
                                })
                            } */}
                            {props.testdata[firstexg].values.map((number) => {
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
                                return <Sidebar_new name={t} temper={number.temperature.value}
                                    vibros={number.vibration_axial.value}
                                    vibrhor={number.vibration_horizontal.value}
                                    vibrvetr={number.vibration_vertical.value}
                                    waterBefore={props.testdata[firstexg]["Охладитель"].Вода.temperature_before}
                                    waterAfter={props.testdata[firstexg]["Охладитель"].Вода.temperature_after}
                                    oilBefore={props.testdata[firstexg]["Охладитель"].Масло.temperature_before}
                                    oilAfter={props.testdata[firstexg]["Охладитель"].Масло.temperature_after}
                                ></Sidebar_new>
                            })}
                            <SubMenu label={'Охладитель'}>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Температура воды до ${props.testdata[firstexg]["Охладитель"].Вода.temperature_before}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Температура воды после ${props.testdata[firstexg]["Охладитель"].Вода.temperature_after}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Температура масла до ${props.testdata[firstexg]["Охладитель"].Масло.temperature_before}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Температура масла после ${props.testdata[firstexg]["Охладитель"].Масло.temperature_after}`}
                                    />
                                </MenuItem>
                            </SubMenu>
                            <SubMenu label={'Главный привод'}>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Ток ротора  А ${props.testdata[firstexg]["Главный привод"].rotor_current}`}
                                    />

                                    {/* {console.log(typeof(data[firstexg]["Главный привод"].rotor_current))}
                                    {console.log(typeof(data[firstexg]["Главный привод"].rotor_voltage))}
                                    {console.log(typeof(data[firstexg]["Главный привод"].stator_current))}
                                    {console.log(typeof(data[firstexg]["Главный привод"].stator_voltage))} */}

                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Напряжение ротера ${props.testdata[firstexg]["Главный привод"].rotor_voltage}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Ток стартера, кВт ${props.testdata[firstexg]["Главный привод"].stator_current}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Напряжение стартера, кВт ${props.testdata[firstexg]["Главный привод"].stator_voltage}`}
                                    />
                                </MenuItem>
                            </SubMenu>
                            <SubMenu label={'Маслобак'}>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Уровень масла ${props.testdata[firstexg]["Маслосистема"].oil_level}`}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        onChange={() => setHidden2(s => !s)}
                                        control={<Checkbox />}
                                        label={`Давление масла ${props.testdata[firstexg]["Маслосистема"].oil_pressure}`}
                                    />
                                </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </ProSidebarProvider>


            <div className='chart_cont'>
                <LineChart width={800} height={600} >
                    <XAxis dataKey={props.timedata} />
                    <YAxis dataKey="value" />

                    <Line dataKey={props.testdata[firstexg].values[firstexg].temperature.value} />

                </LineChart>
            </div>
        </div>

    )

}