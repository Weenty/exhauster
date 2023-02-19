import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
import './Datch_card.css';
import Sertainexgaut from '../pages/Sertainexgaut';
import Header from '../components/Header';
import exgimg from './images/Scheme.png'
import exgbutton from './images/button.png'
import temp from './images/temp_norm.png'
import vibr from './images/vibr_norm.png'
import oil from './images/oil_norm.png'
import ListGroup from 'react-bootstrap/ListGroup';

export default function Datch_card(props) {
    return (
        <div className='datch_container'>
            <Card className='datch_card' style={{ width: '200px', height: '210px' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item className='list_item' ><div className='list_title'>{props.name}</div></ListGroup.Item>
                    <ListGroup.Item className='list_item' >
                        <div className='list_cont'>
                            <div className='list_title'>Температура</div>
                            <div className='list_title'>{props.temper}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ display: props.vibros !== undefined ? 'block' : 'none' }} className='list_item' >
                        <div className='list_cont'>
                            <div className='list_title'>Вертикальная</div>
                            <div style={{ display: props.vibrvetr !== undefined ? 'block' : 'none' }} className='list_title'>{props.vibrvetr}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ display: props.vibros !== undefined ? 'block' : 'none' }} className='list_item' >
                        <div className='list_cont'>
                            <div className='list_title'>Горизантальная</div>
                            <div style={{ display: props.vibrhor !== undefined ? 'block' : 'none' }} className='list_title'>{props.vibrhor}</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ display: props.vibros !== undefined ? 'block' : 'none' }} className='list_item' >
                        <div className='list_cont'>
                            <div className='list_title'>Осевая</div>
                            <div className='list_title'>{props.vibros}</div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}