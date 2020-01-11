import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import AprovalCard from './AprovalCard';
import Comment from './comments'

// import { Container } from './styles';

const App = () => {
  return (
    <div className="ui container comments" style={{ margin: 0, padding: 15 }}>
      <AprovalCard>
        <Comment
          author={faker.name.findName()}
          text={faker.lorem.sentence(8)}
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
      <AprovalCard>
        <Comment
          author={faker.name.findName()}
          text={faker.lorem.sentence(8)}
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
      <AprovalCard>
        <Comment
          author={faker.name.findName()}
          text={faker.lorem.sentence(8)}
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
