import logo from './logo.svg';
import './App.css';
import pic1 from './pic1.jpg';
import React from 'react';
import style from './App.css';
import Logo from './logo.svg';
import {base64Photo} from './Contain.js';
import DeleteIcon from './DeleteIcon';

function App() {
  return (
    <div className='App' style={{float:'left',margin:20}}>
      <div>Hướng dẫn dùng ảnh trong ReactJS</div>
        <img src={pic1} width={300} height={200}></img>
      <div>Đây là ảnh dùng require</div>
        <img src={require('./pic1.jpg')} width={300} height={200}></img>
        <div>Đây là ảnh dùng link online</div>
        <img src='https://msmobile.com.vn/upload_images/images/hinh-nen-phong-canh-dep-cho-may-tinh-2.jpg' width={300} height={200}></img>
      <div>Đây là ảnh dùng base64</div>
      <img src={base64Photo} width={300} height={200}></img>
      <div>Đây là ảnh dùng svg</div>
      <img src={Logo} width={300} height={200}/>
      <DeleteIcon/>
    </div>
  );
}

export default App;
