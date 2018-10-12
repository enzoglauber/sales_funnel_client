import React, { Component } from 'react';
import icon_button from '../../images/icon_button.png';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    // console.log('Provider', Provider)
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      // isToggleOn: !state.isToggleOn
      isToggleOn: true
    }));
  }

  render() {
    return (
        <div className="row">
          <div className="col-12">
          <button type="button" onClick={this.handleClick} className="btn btn-primary btn-add">  <img src={icon_button} alt="customer" />  Adicionar negócio</button>
          </div>
          legal:  {this.state.isToggleOn ? 'ON' : 'OFF'}  
        </div>
    )
  }
}

export default AddButton;