import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from '../../data.json';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../services/Redux/Actions'
import { Mousewheel } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


export default function HomeData() {
    const videoIndex=useSelector((state:any)=>{return state.songChange});
   // console.log(data);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const swiperParams = {

        spaceBetween: 20,
        //slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        autoplay: {
            delay: 3000,
        },
        mousewheelControl: true,
    };
    console.log(videoIndex);
    
    const handlePlay=(video:any)=>{
        dispatch(addSong(video));
        console.log(videoIndex);
        navigate("/videos")
    }
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={6} mousewheel className="mySwiper" {...swiperParams} modules={[Mousewheel]}>
                {data.map(e => {
                    return <SwiperSlide onClick={()=>{handlePlay(e)}}>
                        <div><img src={e.image} style={{ borderRadius: "50%",border:`5px solid ${e.color}`}} /></div>
                        <div>{e.name}</div>
                        <div>{e.position}</div>
                        <div style={{ color: "#ff5900" }}>{e.company}</div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
