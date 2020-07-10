import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without crashing', () =>{
    render(<ContactForm/>);
});

test('can enter info into inputs', () =>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: 'Shanon'}});
    fireEvent.change(lastNameInput, {target: {value: 'Fritz'}});
    fireEvent.change(emailInput, {target: {value: '13fritsh@gmail.com'}});
    fireEvent.change(messageInput, {target: {value: 'Hello World'}});

    const submitButton = screen.getByText(/submit/i);

    fireEvent.click(submitButton);

    const newPerson = screen.findByText(/firstname:/i);
});