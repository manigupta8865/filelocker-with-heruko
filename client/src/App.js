import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import FileDetails from './components/FileDetails';
import fileimage from './components/images/ffff.jpg'

const App = () => (
  <div className='container mt-4'style={{backgroundImage:`url(${fileimage})`}}>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> React File Upload
    </h4>

    <FileUpload />
    <FileDetails/>
  </div>
);

export default App;
