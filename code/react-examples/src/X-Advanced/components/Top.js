import React, { Component } from 'react';

// import withSubscription from '../HOCS/withSubscription';
import MainProvider from './MainProvider';
import Main from './Main';

class Top extends Component {

    render() {
		console.log(this.props);

    return (
      <div className="App">
        <MainProvider>
            {({name}) => <Main input={name}/>}
        </MainProvider>
      </div>
    );
  }
}

export default Top;
// export default withSubscription(Top);
