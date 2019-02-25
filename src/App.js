import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { ResetCSS } from './style';
import { IconfontCSS } from './statics/iconfont';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{ width: '100%', height: '100%' }}>
            <ResetCSS />
            <IconfontCSS />
            <Route path="/" exact component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
