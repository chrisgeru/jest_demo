import React from 'react';
import {configure, mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {getRandomQuote} from './Quotes';

import {App, Home} from "./App"
import {resolveQuotes} from "./Utils";

jest.mock('./Quotes');

configure({adapter: new Adapter()});

it('renders as expected', () => {
    const wrapper = shallow(<Home quote={"Hello World"}/>);
    expect(wrapper).toMatchSnapshot();

});

it('works as expected', async () => {
    getRandomQuote.mockResolvedValueOnce('Readability counts.');
    const wrapper = mount(<App />);

    await resolveQuotes();
    wrapper.update();
    expect(wrapper.find('h1').text()).toBe('Readability counts.')
});
