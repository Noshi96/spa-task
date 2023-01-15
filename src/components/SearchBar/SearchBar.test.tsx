import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('SearchBar', () => {
  it('calls handleSearchQuery with the input value', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(
      <BrowserRouter>
        <SearchBar handleSearchQuery={setStateMock} />
      </BrowserRouter>,
    );

    const input = screen.getByLabelText('Enter id') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 12 } });
    expect(input.value).toBe('12');
  });
});
