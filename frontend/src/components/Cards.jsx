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
import Header from '../components/Header';
import exgimg from './images/Scheme.png'
import exgbutton from './images/button.png'
import tempNorm from './images/temp_norm.png'
import tempWarn from './images/temp_warn.png'
import tempAlarm from './images/temp_alarm.png'
import vibrNorm from './images/vibr_norm.png'
import vibrWarn from './images/vibr_warn.png'
import vibrAlarm from './images/vibr_alarm.png'
import oilNorm from './images/oil_norm.png'
import oilAlarm from './images/oil_alarm.png'

export default function Cards(props) {
    // console.log(props.name)
    // console.log(props.temper)

    let remember = []
    remember.push(props.name)




    const [remdata, setdata] = useState(props.name);

    // console.log(setdata)
    // console.log(remdata)

    const Remember = props => (
        <Sertainexgaut props={remember}></Sertainexgaut>
    );


    return (
        <div>

            {/* <Routes>
                <Route path="/yvedomlenia" element={<Sertainexgaut />} />
            </Routes> */}
            <Card style={{ width: '18rem', height: '31rem' }}>
                <Card.Title className='card_title' style={{ width: '100%', height: '40px' }}>
                    <div>{props.name}</div>

                    <div>
                        <Link to="/sertain"><button><img src={exgbutton}></img></button></Link>

                        {/* <button> <img src={exgbutton}></img></button> */}
                        {/* <Button style={{backgroundImage:{exgbutton},backgroundSize:"cover", width:"40px", height:"40px"}}></Button> */}

                    </div>

                </Card.Title>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Последняя замена ротера</Card.Subtitle>
                    <Card.Text>
                        <div>6 суток</div>
                        <div>Прогноз 12 суток</div>
                    </Card.Text>
                    <Card.Img variant="top" src={exgimg} />
                    <ProSidebarProvider >
                        {/* <input type="checkbox"  */}
                        <Sidebar className='sidebar'>
                            <Menu>
                                <SubMenu label="Датчики подшипников">
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №1 </div>
                                            <div>
                                                {props.temper[0] == "Normal" ? <img src={tempNorm}></img> : props.temper[0] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[0] !== undefined ? 'block' : 'none' }}>
                                                {props.axvibr[0] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[0] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №2 </div>
                                            {props.temper[1] == "Normal" ? <img src={tempNorm}></img> : props.temper[1] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            <div style={{ display: props.axvibr[1] !== undefined ? 'block' : 'none' }} >
                                               {props.axvibr[1] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[1] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №3 </div>
                                            <div>
                                                {props.temper[2] == "Normal" ? <img src={tempNorm}></img> : props.temper[2] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[2] !== undefined ? 'block' : 'none' }} >
                
                                                {props.axvibr[2] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[2] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №4 </div>
                                            <div>
                                                {props.temper[3] == "Normal" ? <img src={tempNorm}></img> : props.temper[3] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[3] !== undefined ? 'block' : 'none' }}>
                           
                                                {props.axvibr[3] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[3] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №5 </div>
                                            <div>
                                                {props.temper[4] == "Normal" ? <img src={tempNorm}></img> : props.temper[4] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[4] !== undefined ? 'block' : 'none' }}>
                               
                                                {props.axvibr[4] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[4] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №6 </div>
                                            <div>
                                                {props.temper[5] == "Normal" ? <img src={tempNorm}></img> : props.temper[5] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[5] !== undefined ? 'block' : 'none' }} >
                                             
                                                {props.axvibr[5] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[5] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №7 </div>
                                            <div>
                                                {props.temper[6] == "Normal" ? <img src={tempNorm}></img> : props.temper[6] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[6] !== undefined ? 'block' : 'none' }}>
                        
                                                {props.axvibr[6] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[6] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №8 </div>
                                            <div>
                                                {props.temper[7] == "Normal" ? <img src={tempNorm}></img> : props.temper[7] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[7] !== undefined ? 'block' : 'none' }}>
                           
                                                {props.axvibr[7] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[7] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Номер №9 </div>
                                            <div >
                                                {props.temper[8] == "Normal" ? <img src={tempNorm}></img> : props.temper[8] == "Alarm" ? <img src={tempAlarm}></img> : <img src={tempWarn}></img>}
                                            </div>
                                            <div style={{ display: props.axvibr[8] !== undefined ? 'block' : 'none' }}>

                                                {props.axvibr[8] == "Warning" ? <img src={vibrWarn}></img> : props.axvibr[8] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrNorm}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem >
                                        <div className='item'>
                                            <div> Уровень масла </div>
                                            <div>
                                                {props.axvibr[0] == "Normal" ? <img src={vibrNorm}></img> : props.axvibr[0] == "Alarm" ? <img src={vibrAlarm}></img> : <img src={vibrWarn}></img>}
                                            </div>
                                        </div>
                                    </MenuItem>
                                </SubMenu>
                            </Menu>
                        </Sidebar>
                    </ProSidebarProvider>
                </Card.Body>
            </Card>


        </div>

    )

}
