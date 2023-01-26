import React from 'react';
import { Result } from './Result';
import './Calculator.module.css';

export class Calculator extends React.Component {

  render() {
    return (
      <table cellPadding={0}>
        <thead>
          <tr>
            <th><Result value={null} /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="AC">AC</button></td>
            <td><button className="+/-">+/-</button></td>
            <td><button className="%">%</button></td>
            <td><button className="÷">÷</button></td>
          </tr>
          <tr>
            <td><button className="7">7</button></td>
            <td><button className="8">8</button></td>
            <td><button className="9">9</button></td>
            <td><button className="X">X</button></td>
          </tr>
          <tr>
            <td><button className="4">4</button></td>
            <td><button className="5">5</button></td>
            <td><button className="6">6</button></td>
            <td><button className="-">-</button></td>
          </tr>
          <tr>
            <td><button className="1">1</button></td>
            <td><button className="2">2</button></td>
            <td><button className="3">3</button></td>
            <td><button className="+">+</button></td>
          </tr>
          <tr>
            <td colSpan={2}><button className="0">0</button></td>
            <td><button className=".">.</button></td>
            <td><button className="=">=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}