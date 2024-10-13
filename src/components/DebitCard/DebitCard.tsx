import './styles.css';
import React, { useEffect, useRef, useState } from "react"
import { checkBank } from "./checkBank"
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools"
import { useCardUtils } from "./hooks";

interface CardNumberState {
    section1: string;
    section2: string;
    section3: string;
    section4: string;
}

type MyComponentProps = {
    changeHandler?: (value: string) => void
    card?: string
    userName?: string
}

export const DebitCard: React.FC<MyComponentProps> = ({ changeHandler, card, userName }) => {

    const [bank, setBank] = useState<{ name: string, logo: string, title: string }>()
    const [cardNumber, setCardNumber] = useState<CardNumberState>({
        section1: card?.substring(0, 4) || '',
        section2: card?.substring(4, 8) || '',
        section3: card?.substring(8, 12) || '',
        section4: card?.substring(12, 16) || '',
    });

    const inputRef = useRef<HTMLInputElement>(null);

    useCardUtils(inputRef, setCardNumber)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, section: keyof CardNumberState) => {
        const value = e.target.value
        const farsiValue = digitsEnToFa(value)

        setCardNumber((prevState) => ({
            ...prevState,
            [section]: farsiValue
        }));

        if (value.length === 4) {
            let nextInput
            switch (section) {
                case "section1":
                    nextInput = document.getElementById('section2') as HTMLInputElement;
                    nextInput?.focus();
                    nextInput?.setSelectionRange(4, 4);
                    break;
                case "section2":
                    nextInput = document.getElementById('section3') as HTMLInputElement;
                    nextInput?.focus();
                    nextInput?.setSelectionRange(4, 4);
                    break;
                case "section3":
                    nextInput = document.getElementById('section4') as HTMLInputElement;
                    nextInput?.focus();
                    nextInput?.setSelectionRange(4, 4);
                    break;
                default:
                    break;
            }
        }
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, section: keyof CardNumberState) => {
        if (e.key === 'Backspace' && (e.target as HTMLInputElement).value.length === 0) {
            let prevInput
            switch (section) {
                case "section2":
                    prevInput = document.getElementById('section1') as HTMLInputElement;
                    prevInput?.focus();
                    prevInput?.setSelectionRange(4, 4);
                    break;
                case "section3":
                    prevInput = document.getElementById('section2') as HTMLInputElement;
                    prevInput?.focus();
                    prevInput?.setSelectionRange(4, 4);
                    break;
                case "section4":
                    prevInput = document.getElementById('section3') as HTMLInputElement;
                    prevInput?.focus();
                    prevInput?.setSelectionRange(4, 4);
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        const fullNumber = digitsFaToEn(cardNumber["section1"] + cardNumber["section2"] + cardNumber["section3"] + cardNumber["section4"])

        changeHandler && changeHandler(fullNumber)

        const englishCard = digitsFaToEn(cardNumber["section1"] + cardNumber["section2"])

        const card = checkBank(englishCard);
        if (card) {
            setBank({ name: card.bank_name, title: card.bank_title, logo: card.bank_logo })
        } else {
            setBank(undefined)
        }

        return
    }, [cardNumber])

    return (
        <div className="relative flex items-center justify-center max-w-[320px] sm:max-w-[420px] max-h-[200px] sm:max-h-[275px] rounded-md">
            <div className={`card-input-container flex flex-col z-50 shadow-lg text-sm w-full ${(changeHandler && !card && !bank) ? "pt-[4.5rem] sm:pt-[7.7rem]" : "pt-[5.5rem] sm:pt-36"} pb-8 sm:pb-10 px-4 sm:px-6 rounded-lg relative`} dir="ltr">
                {
                    changeHandler
                    && !card && !bank &&
                    <div className="text-center text-xs sm:text-base">
                        افزودن کارت جدید
                    </div>
                }
                {userName &&
                    <div className="mr-2 p-2" dir="rtl">
                        <p className="bg-white inline py-[0.15rem] px-2 rounded-md">{userName}</p>
                    </div>
                }
                <div className="flex [&>input]:w-[60px] sm:[&>input]:w-[80px] [&>input]:ring-0 [&>input]:border-0 [&>input]:focus:ring-0 [&>input]:outline-none">
                    <input
                        disabled={(card && !changeHandler) ? true : false}
                        ref={inputRef}
                        className="p-1 text-xs sm:text-base font-iranyekan px-4 py-2 m-[0.4rem] rounded-lg text-center bg-[#f0f0f0]"
                        type="text"
                        id="section1"
                        value={cardNumber.section1}
                        onChange={(e) => handleChange(e, 'section1')}
                        onKeyDown={(e) => handleBackspace(e, 'section1')}
                        maxLength={4}
                    />
                    <input
                        disabled={((card && !changeHandler) && !changeHandler) ? true : false}
                        className="p-1 text-xs sm:text-base font-iranyekan px-4 py-2 m-[0.4rem] rounded-lg text-center bg-[#f0f0f0]"
                        type="text"
                        id="section2"
                        value={cardNumber.section2}
                        onChange={(e) => handleChange(e, 'section2')}
                        onKeyDown={(e) => handleBackspace(e, 'section2')}
                        maxLength={4}
                    />
                    <input
                        disabled={(card && !changeHandler) ? true : false}
                        className="p-1 text-xs sm:text-base font-iranyekan px-4 py-2 m-[0.4rem] rounded-lg text-center bg-[#f0f0f0]"
                        type="text"
                        id="section3"
                        value={cardNumber.section3}
                        onChange={(e) => handleChange(e, 'section3')}
                        onKeyDown={(e) => handleBackspace(e, 'section3')}
                        maxLength={4}
                    />
                    <input
                        disabled={(card && !changeHandler) ? true : false}
                        className="p-1 text-xs sm:text-base font-iranyekan px-4 py-2 m-[0.4rem] rounded-lg text-center bg-[#f0f0f0]"
                        type="text"
                        id="section4"
                        value={cardNumber.section4}
                        onChange={(e) => handleChange(e, 'section4')}
                        onKeyDown={(e) => handleBackspace(e, 'section4')}
                        maxLength={4}
                    />
                </div>
            </div>
            <div className="absolute w-full h-full transition-all rounded-lg">
                {bank ? <img src={`${bank.logo}`} alt="" className="w-full h-full relative rounded-lg object-cover" /> : <div className="w-full h-full bg-white shadow-xl rounded-md"></div>
                }
            </div>
        </div>
    )
}
