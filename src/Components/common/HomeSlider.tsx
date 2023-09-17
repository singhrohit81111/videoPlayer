import { videoData } from "@/dataTypes/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '@services/Redux/Actions';
import { useNavigate } from 'react-router-dom';
import { RootState } from "@/services/Redux/Store";
import { HOME_SWIPER_PARAMS } from "@/constants/swiperParams";

interface videoProps {
    persons: videoData[];
}
interface video {
    index: number,
}
export const HomeSlider: React.FC<videoProps> = ({ persons }) => {
    const videoIndex = useSelector((state: RootState) => { return state.songChange });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlay = (video: video) => {
        dispatch(addSong(video));
        console.log(videoIndex);
        navigate("/videos")
    }

    return (
        <Swiper watchSlidesProgress={true} slidesPerView={6} mousewheel className="mySwiper" {...HOME_SWIPER_PARAMS} modules={[Mousewheel]}>
            {persons.map(person => {
                return <SwiperSlide onClick={() => { handlePlay(person) }} className="slide">
                    <div className="slideImage"><img src={person.image} style={{ borderRadius: "50%", border: `5px solid ${person.color}` }} /></div>
                    <div className="personInfo">
                        <div className="personInfoName">{person.name}</div>
                        <div className="personInfoPosition">{person.position}</div>
                        <div style={{ color: "#ff5900" }} className="personInfoCompany">{person.company}</div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    )
}

