import {VideoContentSlider} from '@/components/common/VideoContentSlider';
import videos from '../data.json';

export default function VideoContent() {

    return (
        <div className='videoDetails'>
            <VideoContentSlider videos={videos}/>
        </div>
    )
}
