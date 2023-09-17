import persons from '../../data.json';
import { HomeSlider } from "../common/HomeSlider";


export default function HomeContent() {
    return (
        <div>
            <HomeSlider persons={persons}/>
        </div>
    )
}
