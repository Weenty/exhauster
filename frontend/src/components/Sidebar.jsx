import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';
import 'react-dropdown/style.css';
import { Menu, MenuItem, ProSidebarProvider, Sidebar, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css';

// import io from 'socket.io-client';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

// const io = require('socket.io-client');
// const socket = io('http://127.0.0.1:5000');

function Sidebar_new(props) {

  const [hidden2, setHidden2] = useState(true);
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(true);


  // 1. listen for a cpu event and update the state
  // useEffect(() => {
  //   socket.on('add_data', (data) => {
  //     setData(currentData => [...currentData, data]);
  //   });
  // }, []);




  return (

    <div>
      {/* <div>
        {!hidden ? <p>You can see me!</p> : null}
        <button onClick={() => setHidden(s => !s)}>
          react show hide component
        </button>
      </div> */}

      <div className='chart_cont'>

        <div>

          {/* <input type="checkbox"  */}
          <Sidebar style={{ width: '400px' }}>
            <Menu>
              <SubMenu label={`Подшипник № ${props.name}`}>
                <MenuItem>
                  <FormControlLabel
                    onChange={() => setHidden2(s => !s)}
                    control={<Checkbox />}
                    label={`Температура ${props.temper}`}
                  />
                </MenuItem>


                <div >
                  {/* {console.log(typeof(props.vibrvetr))} */}
                  <MenuItem style={{ display: props.vibrvetr !== undefined ? 'block' : 'none' }}>
                    <FormControlLabel
                      onChange={() => setHidden2(s => !s)}
                      control={<Checkbox />}
                      label={`Вертикальная ${props.vibrvetr}`}
                    />
                  </MenuItem  >
                  <MenuItem style={{ display: props.vibrhor !== undefined ? 'block' : 'none' }} >
                    <FormControlLabel
                      onChange={() => setHidden2(s => !s)}
                      control={<Checkbox />}
                      label={`Горизонтальная ${props.vibrhor}`}
                    />
                  </MenuItem >
                  <MenuItem style={{ display: props.vibros !== undefined ? 'block' : 'none' }}>
                    <FormControlLabel
                      onChange={() => setHidden2(s => !s)}
                      control={<Checkbox />}
                      label={`Осевая ${props.vibros}`}
                    />
                  </MenuItem>
                </div>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_new;