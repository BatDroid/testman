import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../Home';

test('Home should render OK', async () => {
  const {getByText, getByTestId, getAllByTestId, queryByText} = render(
    <Home />,
  );
  const input = getByTestId('adder-input');
  const button = getByText('Add');
  fireEvent.changeText(input, 'item0');
  fireEvent.press(button);
  fireEvent.changeText(input, 'item1');
  fireEvent.press(button);
  const item0 = getByText('item0');
  const item1 = getByText('item1');

  expect(item0).toBeDefined();
  expect(item1).toBeDefined();
  fireEvent.press(getAllByTestId('cell-delete')[0]);
  expect(queryByText('item0')).toBeNull();
  const list = getByTestId('list');
  expect(list).toContainElement(item1);
});
