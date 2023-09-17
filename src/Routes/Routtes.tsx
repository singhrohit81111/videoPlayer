import Home from '../pages/Home';
import Videos from '@/components/layout/Videos';
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
