import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import {IPolygonsResult, IFormFields } from '../src/interfaces';
import {Form} from './components/Form'
import './App.css';


  const App: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<IFormFields>();
  const [polygons, setPolygons] =  useState([]);
  const [message, setMessage] = useState('');
  const errorMessage = "Oops something went wrong!";

  const onSubmit = async (data:IFormFields) => {
    setMessage("loading...");
    
    const formData = new FormData()
    formData.append("file", data.file[0])
    const options = {
      method: "POST",
      body: formData
    }
    const endpoint = "http://localhost:7070/upload";
    try {
      const res = await fetch(endpoint, options);
      const polygonsList = await res.json();
      if (res.ok === false) {
        setMessage(errorMessage);
    }
      if(polygonsList[0].area){
        setMessage('');
        setPolygons(polygonsList);
      } 
    } catch (error) {
      setMessage(errorMessage)
    }

  }


  const renderPolygonsList = polygons.map((item:IPolygonsResult) => {
    return (
      <li key={item.id}>
        <p>{item.area}</p>
        <p>{item.category}</p>
        <p>{item.author}</p>
      </li>
    );
  });

  
  return (
    <main>
      <header>
        <h1>Polygons Area Calculator</h1>
      </header>
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit} register={register}/>
      {message? <p>{message}</p> :
        <>
        {polygons.length? <h3>Result</h3> : null}
        <ul>{renderPolygonsList}</ul>
        </>
      }
      </main>
   
  );
}

export default App;
