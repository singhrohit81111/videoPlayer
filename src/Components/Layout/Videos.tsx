import { useEffect, useState } from 'react';
import podcasts from '../../data.json';
import '../Styles/style.scss';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import videos from '../../data.json';
import { useSelector } from 'react-redux';
import { RootState } from '@/services/Redux/Store';
import { Pagination } from 'swiper/modules';


export default function Videos() {
    const [playingSlide, setPlayingSlide] = useState(0);
    const videoData = useSelector((video: RootState) => video.songChange);
    const [swiperInstance, setSwiperInstance] = useState<SwiperRef['swiper']>();
    useEffect(() => {
        if (swiperInstance) {
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
                }} navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSlideChange={(s) => setPlayingSlide(s.activeIndex)}
                slideActiveClass={'active-video-slide'}
                className="mySwiper"
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                modules={[Pagination]}
            >
                {videos.map((video, index) => {
                    if (index === playingSlide) return <SwiperSlide style={{ width: "40vw" }} className='activeVideoCard'>
                        <div className='videoHeader'>
                            <img src={`${podcasts[index].image}`} className='activeVideoImage ' />
                            <div className='activeVideoDetails'>
                                <div className='activeVideoName'>{`${podcasts[index].name}`}</div>
                                <div className='activeVideoPosition'>{`${podcasts[index].position}`}</div>
                                <div className='activeVideoCompany'>{`${podcasts[index].company}`}</div>
                            </div>
                        </div>
                        <video src={`${podcasts[index].videoURL}`} autoPlay controls controlsList='nodownload' style={{ height: "51vh", width: "14vw" }} />
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
