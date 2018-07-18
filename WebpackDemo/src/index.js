import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component(){
	var el = document.createElement('div');
	el.innerHTML = ['Hello', 'webpack'].join(' ');
	el.classList.add('hello');
	
	var btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	el.appendChild(btn);
	return el;
}

document.body.appendChild(component());