import React, { Component } from 'react';
import OpportunityList from "../opportunity/_list.js";
import AddButton from "./_add_button";

class StagesList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      stages: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/stages.json')
      .then((res) => {
        if (res.status === 200) return res.json();
        else return { error: 'there was an error with response' } 
      })
      .then((data) => { this.setState({ stages: data }) });
  }
  render() {
    var stages = this.state.stages.map((stage) => {
      return (
        <div key={stage.id} className="col-sm-2">
          <div className={`card header stage-${stage.id}`}>
            <div className="card-header">
              {stage.name}
            </div>
            <div className="card-body">
              <div className="clearfix">
                <span className="total">R$ 15.000,00</span>
                <span className="count float-right">2 negócios</span>
              </div>
            </div>
          </div>
          <OpportunityList data={stage.opportunities} />
        </div>
      )
    })
    return (
      <div className="container-fluid">
        <AddButton />
        <div className="row">
          {stages}
        </div>
      </div>      
    )
  }
}

export default StagesList;