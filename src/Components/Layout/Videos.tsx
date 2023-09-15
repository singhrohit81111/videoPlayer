import React, { useEffect, useRef, useState } from 'react';
import podcasts from '../../data.json';
import '../Styles/style.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import videos from '../../data.json';

// import required modules
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';

export default function Videos() {
    const videoRef = useRef<typeof Swiper | null>(null);
    const [playingSlide, setPlayingSlide] = useState(0);
    const videoData = useSelector((video: any) => video.songChange);
    console.log(videoData);
    const [swiperInstance, setSwiperInstance] = useState<SwiperRef['swiper']>();

    useEffect(() => {
        // console.log(swiperRef, 'swiperRefswiperRefswiperRefswiperRef');
        // // setPlayingSlide(videoData.index);
        // // console.log(playingSlide);
        if(swiperInstance) {
            console.log(swiperInstance);
            
            swiperInstance.slideTo(videoData.index, 10);
        }

    }, [videoData, swiperInstance])
    return (
        <div className='videoDetails'>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(s) => setPlayingSlide(s.activeIndex)}
                slideActiveClass={'active-slide'}
                className="mySwiper"
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {videos.map((video, index) => {
                    if (index === playingSlide) return <SwiperSlide style={{ width: "40vw" }} className='videoC' >
                        <div className='videoHeader'>
                            <img src={`${podcasts[index].image}`} className='headerImage'/>
                            <div className='headerDetails
                            '>
                                <div className='headerName'>{`${podcasts[index].name}`}</div>
                                <div className='headerPosition'>{`${podcasts[index].position}`}</div>
                                <div className='headerCompany'>{`${podcasts[index].company}`}</div>
                            </div>
                        </div>
                        <video src={`${podcasts[index].videoURL}`} autoPlay controls controlsList='nodownload' style={{height:"51vh",width:"14vw"}}/>
                    </SwiperSlide>
                    return <SwiperSlide style={{ width: "16vw" }} className='videoCard'>
                        <div><img src={video.image} style={{ borderRadius: "50%", marginTop: "60px" }} /></div>
                        <div className='personDetails'>
                            <div className='name'>{video.name}</div>
                            <div className='position'>{video.position}</div>
                            <div className='company'>{video.company}</div>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
        </div>
    )
}
