import VideoContent from '@/pages/VideoContent';
import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Routtes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path='/videos' element={<VideoContent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
