import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { DebitCard } from '../DebitCard';

interface SwiperInstance<T> {
    activeIndex: number;
}

type DebitCardSliderProps = {
    userCards: string[] | undefined
    cardHandler: (value: string) => void
    userName?: string
}

/**
 * DebitCard Component
 *
 * @param {{ cardHandler: (); card: string; userName: string; }} props
 * @param {*} props.CardHandler: Get card data from this callback function
 * @param {*} props.userCards : An array of user's saved cards
 * @param {*} props.userName : Name to show on card(optional)
 * 
 * @returns {*}
 */
export const DebitCardSlider: React.FC<DebitCardSliderProps> = ({ userCards, cardHandler, userName }) => {

    const [cardNumber, setCardNumber] = useState("")
    const [activeCard, setActiveCard] = useState<string | undefined>()

    function slideHanlder<T>(swiper: SwiperInstance<T>) {
        if (swiper.activeIndex == 0) {
            setActiveCard(cardNumber)
        } else {
            setActiveCard(userCards && userCards[swiper.activeIndex - 1])
        }

        return
    }

    useEffect(() => {
        setActiveCard(cardNumber)

    }, [cardNumber])

    useEffect(() => {
        activeCard && cardHandler(activeCard)

    }, [activeCard])

    return (
        <>
            <Swiper spaceBetween={30} parallax={true} slidesPerView={1} onSlideChange={(swiper) => slideHanlder(swiper)} navigation={true} modules={[Navigation]} className="mySwiper w-[320px] sm:w-[420px] h-[200px] sm:h-[275px] rounded-md" dir='ltr'>
                <SwiperSlide className=''>
                    <DebitCard changeHandler={(value) => setCardNumber(value)} userName={userName} card={undefined} />
                </SwiperSlide>
                {userCards && userCards?.map((item) => (
                    <SwiperSlide className=''>
                        <DebitCard key={item} card={`${item}`} changeHandler={undefined} userName={userName} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <input type="text" name='activeCard' id='activeCard' hidden className='invisible hidden' required value={activeCard} disabled />
        </>
    );
}
