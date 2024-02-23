//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
    const [number, setNumber] = useState("");
    const handleonChange = (event) => {
        setNumber(event.target.value);
    }

    return ( <
        >
        <
        div className = "container" >
        <
        div className = "row " >
        <
        div className = "col-6 m-auto py-5 text-center" >
        <
        input type = "tel"
        pattern = "[0-9]{10}"
        onChange = { handleonChange }
        value = { number }
        className = "form-control"
        placeholder = 'Enter Whatsapp Number' / >
        <
        a rel = "noreferrer"
        target = "_blank"
        className = "btn btn-primary my-3 m-auto"
        href = { `http://wa.me/91${number}` } > Chat on whatsapp < /a> <
        /div> <
        /div>   <
        /div> <
        />
    );
}

export default App;

//https://api.whatsapp.com/send/?phone=918335001705&text&type=phone_number&app_absent=0