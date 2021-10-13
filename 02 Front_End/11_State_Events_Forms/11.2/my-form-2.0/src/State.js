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
        <ComboboxInput autocomplete={false} onChange={this.props.functionHandler} name='estado'/>
        <ComboboxPopover>
          <ComboboxList>
          {
            states.slice(0, 10).map((result, index) => (
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