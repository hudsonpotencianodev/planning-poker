import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CreateGame } from './CreateGame';
import * as gamesService from '../../../service/games';

jest.mock('../../../service/games');
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
jest.mock('unique-names-generator', () => ({
  starWars: ['Jabba'],
  colors: ['red'],
  animals: ['kangaroo'],
  uniqueNamesGenerator: jest.fn(),
  Config: jest.fn(),
}));
describe('CreateGame component', () => {
  it('should display correct text fields', () => {
    render(<CreateGame />);

    expect(screen.getByPlaceholderText('Enter a session name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('should display create button', () => {
    render(<CreateGame />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Create');
  });
  
  it('should empty inputs when clicked', () => {
    render(<CreateGame />);
    const sessionName = screen.getByPlaceholderText('Enter a session name');
    const userName = screen.getByPlaceholderText('Enter your name');
    userEvent.click(sessionName);
    userEvent.click(userName);

    expect(sessionName).toHaveValue('');
    expect(userName).toHaveValue('');
  });

  it('should be able to create new session', async () => {
    render(<CreateGame />);
    const sessionName = screen.getByPlaceholderText('Enter a session name');
    userEvent.clear(sessionName);
    userEvent.type(sessionName, 'Marvels');

    const userName = screen.getByPlaceholderText('Enter your name');
    userEvent.clear(userName);
    userEvent.type(userName, 'Rock');

    const createButton = screen.getByText('Create');
    userEvent.click(createButton);

    expect(gamesService.addNewGame).toHaveBeenCalled();

    expect(gamesService.addNewGame).toHaveBeenCalledWith(
      expect.objectContaining({ createdBy: 'Rock', name: 'Marvels' })
    );
  });
});
