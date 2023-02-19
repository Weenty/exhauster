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
import './Header.css';
import imgBtn from './img/Btn.png'
import imgEvr from './img/Logo.png'
import img1 from './img/button.png'
import img2 from './img/dnlogo.png'


function Header(props) {



    return (

        <div>

            <div className='main_block'>
                <div className='first_header'>
                <div className='btn_1'>
                    <img src={imgBtn}>

                    </img>
                </div>
                <div className='btn_1'>
                    <img src={imgEvr}>

                    </img>
                </div>
                <div className='btn_1'>
                    Прогнозная аналитика эксгаутеров
                </div>
                </div>
                

                <div className='sec_header'>

                    <div className='btn_1'>
                        Справочник
                    </div>
                    <div className='btn_1'>
                        <img src={img1}></img>
                    </div>
                    <div className='btn_1'>
                        <img src={img2}></img>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Header; 