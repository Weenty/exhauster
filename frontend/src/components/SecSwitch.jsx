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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'react-dropdown/style.css';
import './SecSwitch.css';
import imgBtn from './img/Btn.png'
import imgEvr from './img/Logo.png'
import img1 from './img/button.png'
import img2 from './img/dnlogo.png'

export default function SecSwitch() {
    return (
        <div className='switch_container'>
            <div className='time'></div>
            <div className='switch_buttons'>
            <Link to="/"><button>Эксгаутеры </button>
                </Link>
                <Link to="/sertain"><button>Мнемосхема </button>
                </Link>
                <Link to="/stat"><button>График </button>
                </Link>
            </div>
        </div>
    )
}