import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { ResetCSS, PageWrap } from './style';
import { IconfontCSS } from './statics/iconfont';
import Home from './pages/home';
import Controller from './common/controller';
import Cover from './common/cover';
import Navbar from './common/navbar';
import Magnifer from './common/magnifier';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{ width: '100%', height: '100%' }}>
            <ResetCSS />
            <IconfontCSS />
            <Navbar />
            <PageWrap>
              <Route basename={process.env.PUBLIC_URL} path="/" exact component={Home} />
              <Controller />
              <Cover />
              <Magnifer />
            </PageWrap>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
