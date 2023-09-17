import { Pagination } from 'swiper/modules';


export const HOME_SWIPER_PARAMS = {

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


/*export const VIDEO_CONTENT_PARAMS={
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
}
*/
export const VIDEO_CONTENT_PARAMS = {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Pagination], // Make sure Pagination is properly imported if it's a separate module.
};




