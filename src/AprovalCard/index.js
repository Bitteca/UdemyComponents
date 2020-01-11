import React from 'react';

// import { Container } from './styles';

const AprovalCard = props => {
  return (
    <div style={{ padding: ' 0 10px 10px 10px' }} className="ui card">
      <div className="content">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default AprovalCard;
