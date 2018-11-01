import React from 'react';
import ReactDOM from 'react-dom';
import DialogBox from './DialogBox';
import { shallow } from 'enzyme';
import { } from './setupTests';

it('renders without crashing when bookDetail is undefined', () => {
    const bookDetail = undefined;
    const div = document.createElement('div');
    ReactDOM.render(<DialogBox bookDetail={bookDetail} reset={() => {}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('render DialogBox correctly', () => {
    const wrapper = shallow(<DialogBox />);
    expect(wrapper).toMatchSnapshot();
  });

it('renders without crashing', () => {
  const bookDetail = {title: {"#cdata": "book title"}, text_reviews_count: {"#text": "324"}, ratings_count: {"#text": "23"}, average_rating: 123,
                        best_book: {image_url: 'https://www.goodreads.com/img.png'}, authors: {author: {name: "React"}}}
  const div = document.createElement('div');
  ReactDOM.render(<DialogBox bookDetail={bookDetail} reset={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});