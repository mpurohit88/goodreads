import React from 'react';
import ReactDOM from 'react-dom';
import BookTile from './BookTile';
import { shallow } from 'enzyme';

import { } from './setupTests';

it('renders without crashing', () => {
  const searchResult = {text_reviews_count: {"#text": "324"}, ratings_count: {"#text": "23"}, average_rating: 123,
                        best_book: {sort_image_url: 'https://www.goodreads.com/img.png', author: {name: "React"}}}
  const div = document.createElement('div');
  ReactDOM.render(<BookTile searchResult={searchResult} index={1}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Book Tile correctly', () => {
  const wrapper = shallow(<BookTile />);
  expect(wrapper).toMatchSnapshot();
});