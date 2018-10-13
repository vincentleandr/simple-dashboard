import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

import App from './App';
import Header from './components/header';
import Sidenav from './components/sidenav';
import Home from './containers/home';
import NestedTab from './containers/nestedtab';
import List from './containers/list';

configure({ adapter: new Adapter() });


describe('App', () => {
  const wrapper = shallow(<App />);
  const header = <Header />;
  const sidenav = <Sidenav />;
  const home = <Home />;
  const nestedtab = <NestedTab />
  const list = <List />

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('App renders without crashing', () => {
    wrapper;
  });

  it('App renders the header', () => {
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('App renders the sidenav', () => {
    expect(wrapper.contains(sidenav)).toEqual(true);
  });

  it('App renders the home', () => {
    expect(wrapper.find(home));
  });

  it('always renders the nestedtab', () => {
    expect(wrapper.find(nestedtab));
  });

  it('always renders the list', () => {
    expect(wrapper.find(list));
  });

  it('App renders the maincontent and everything else inside it', () => {
    mount(<div className="main-content"></div>);
  });

  it('App have states', () => {
    expect(wrapper.state('name')).toEqual('Guest');
    expect(wrapper.state('lists')).toEqual([]);
  });

  it('Home receive correct name props', () => {
    const homeProps = shallow(<Home name='Guest' />);
    expect(homeProps.find('h1').text()).toEqual('Welcome, Guest !');
  });

})
