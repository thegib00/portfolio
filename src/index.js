import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Header/App';
import reportWebVitals from './reportWebVitals';
import BasicCard from "./Main/Card";
import BasicLine from "./Extra/Line";
import BasicSkills from "./Main/Skills"
import BasicContact from "./Footer/Contact";
import BasicStatement from "./Footer/Statement";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>

        <div className="Outter-Box">
            <h1>Projects</h1>
        </div>
        <BasicLine/>
        <BasicCard/>

        <div className="Outter-Box">
            <h1>Skills</h1>
        </div>
        <BasicLine/>
        <BasicSkills/>

        <div className="Outter-Box">
            <h1>Contact</h1>
        </div>
        <BasicLine/>
        <BasicContact/>

        <BasicLine/>
        <BasicStatement/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
