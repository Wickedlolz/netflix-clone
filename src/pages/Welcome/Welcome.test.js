import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

import Welcome from './Welcome';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders welcome page without crashing', async () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </BrowserRouter>,
        container
    );

    expect(container.querySelector('h1').textContent).toBe(
        'Unlimited movies, TV shows, and more.'
    );
});
