// import io from 'socket.io-client';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useEffect, useState } from 'react';
// import {
//   BarChart,
//   Bar,
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip
// } from 'recharts';

// // const io = require('socket.io-client');
// const socket = io('http://127.0.0.1:5000');





// export default function Chart ()  {
//   const [data, setData] = useState([]);
//   const [hidden, setHidden] = useState(true);
//   // 1. listen for a cpu event and update the state
//   useEffect(() => {
//     socket.on('add_data', (data) => {
//       setData(currentData => [...currentData, data]);
//     });
//   }, []);

//   // 2. render the line chart using the state
//   return (
//     <div>
// блаблаблаблаблаба
//       <div>
//         <h1> Hello World </h1>
//         {!hidden ? <p>You can see me!</p> : null}
//         <button onClick={() => setHidden(s => !s)}>
//           react show hide component
//         </button>
//       </div>

//       <h1>Real Time CPU Usage</h1>
//       <LineChart width={800} height={600} data={data}>
//         <XAxis dataKey="name" />
//         <YAxis dataKey="value" />
//         {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5"/> */}

//         {!hidden ? <Line dataKey="value" /> : null}

//       </LineChart>


//     </div>
//   );
// };