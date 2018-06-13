import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactSEO from 'react-seo';

ReactSEO.startMagic([{url: '/', isFullMatch:true, ajaxFunction: App, urlParams:['/']}],renderDOM);

function renderDOM(){
	ReactDOM.render(<App />, document.getElementById('root'));
	registerServiceWorker();
}

// ReactDOM.render(<App />, document.getElementById('root'));
// 	registerServiceWorker();