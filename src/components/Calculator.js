import React from 'react';
import { Button } from './Button';
import { Result } from './Result';
import './Calculator.module.css';

export class Calculator extends React.Component {
  render() {
    return (
      <table cellPadding={0}>
        <thead>
          <tr>
            <th><Result value="75" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button name="ac" label="AC" /></td>
            <td><Button name="plus-minus" label="+/-" /></td>
            <td><Button name="percent" label="%" /></td>
            <td><Button name="divide" label="÷" /></td>
          </tr>
          <tr>
            <td><Button name="seven" label="7" /></td>
            <td><Button name="eight" label="8" /></td>
            <td><Button name="nine" label="9" /></td>
            <td><Button name="multiply" label="X" /></td>
          </tr>
          <tr>
            <td><Button name="four" label="4" /></td>
            <td><Button name="five" label="5" /></td>
            <td><Button name="six" label="6" /></td>
            <td><Button name="subtract" label="-" /></td>
          </tr>
          <tr>
            <td><Button name="one" label="1" /></td>
            <td><Button name="two" label="2" /></td>
            <td><Button name="three" label="3" /></td>
            <td><Button name="add" label="+" /></td>
          </tr>
          <tr>
            <td colSpan={2}><Button name="zero" label="0" /></td>
            <td><Button name="dot" label="." /></td>
            <td><Button name="equals" label="=" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}