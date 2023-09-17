import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import persons from '../../data.json';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '@services/Redux/Actions';
import { Mousewheel } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { RootState } from "@/services/Redux/Store";

interface video{
    index:number,
}
export default function HomeContent() {
    const videoIndex=useSelector((state:RootState)=>{return state.songChange});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const swiperParams = {

        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        autoplay: {
            delay: 3000,
        },
        mousewheelControl: true,
    };    
    const handlePlay=(video:video)=>{
        dispatch(addSong(video));
        console.log(videoIndex);
        navigate("/videos")
    }
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={6} mousewheel className="mySwiper" {...swiperParams} modules={[Mousewheel]}>
                {persons.map(person => {
                    return <SwiperSlide onClick={()=>{handlePlay(person)}}>
                        <div><img src={person.image} style={{ borderRadius: "50%",border:`5px solid ${person.color}`}} /></div>
                        <div>{person.name}</div>
                        <div>{person.position}</div>
                        <div style={{ color: "#ff5900" }}>{person.company}</div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
