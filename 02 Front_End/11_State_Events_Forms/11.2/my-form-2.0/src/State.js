import React from 'react';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
import "@reach/combobox/styles.css";
import states from './data';

class State extends React.Component {

  render() {
    return (
    <div>
    <span id="demo">Estado:</span>
      <Combobox aria-labelledby="demo">
        <ComboboxInput onChange={this.props.functionHandler} name='estado' placeholder='Escreva a Sigla'/>
        <ComboboxPopover>
          <ComboboxList>
          {
            states.map((result, index) => (
              <ComboboxOption
                key={index}
                value={result}
              />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
    );
  }
}

export default State;