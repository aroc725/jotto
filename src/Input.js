import React, { Component } from 'react';
import { Connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div>
        <button />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(Input);
