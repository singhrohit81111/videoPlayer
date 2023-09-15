import React from 'react'
import Home from '../Pages/Home';
import Videos from '@/Components/Layout/Videos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Routtes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path='/videos' element={<Videos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
