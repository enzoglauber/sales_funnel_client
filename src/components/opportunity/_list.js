import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

class OpportunityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: props.data
    };
  }

  render() {
    var opportunities = this.state.opportunities.map((opportunity) => {
      console.log('opportunity', opportunity);
      return (
        <div key={opportunity.id} className={`card opportunity-${opportunity.id}`}>
          <div className="card-body">
            <div className="clearfix">
              <div className="title">
                {opportunity.title}
              </div>
              <div className="customer">
                <FontAwesomeIcon icon={faBuilding} /> {opportunity.customer}
              </div>
              <div className="value float-right text-success">
                {opportunity.value}
              </div>              
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>{opportunities}</div>
    )
  }
}

export default OpportunityList;