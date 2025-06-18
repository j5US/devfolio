import { useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useContext, useRef } from 'react';
import ThemesContext from '../context/themes';
import { RiCloseLine } from 'react-icons/ri';

function AlternateLayout({ children }) {
    const elementRef = useRef(null);
    const navigate = useNavigate();
    const { isDarkEnabled } = useContext(ThemesContext);
    const bgSecondary = isDarkEnabled ? "#0d1117" : "#ede9e9";
    const bgActive = isDarkEnabled ? "#21262d" : "#e3e0e0";


    useGSAP(() => {
        const tl = gsap.timeline();

        tl
            .fromTo(".about-content, .close-btn", {
                translateY: 30,
                opacity: 0
            }, {
                translateY: 0,
                opacity: 1,
                duration: 0.7,
                delay: 0.4,
                ease: "power1.out"
            })
    }, [])

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;
        gsap.to(el, {
            backgroundColor: bgActive,
            scale: "1.15",
            duration: 0.3,
        });
        gsap
            .to(".about-content", {
                translateY: "20px",
                duration: 0.4,
                ease: "power1.out"
            });
    });

    const handleMouseLeave = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;
        // gsap.killTweensOf(el);
        gsap.to(el, {
            backgroundColor: bgSecondary,
            scale: "1",
            duration: 0.3,
        });
        gsap.to(".about-content", {
            translateY: "0px",
            duration: 0.4,
            ease: "power1.out"
        });
    });
    const handleClick = contextSafe(() => {
        const el = elementRef.current;
        if (!el) return;

        gsap.to(".close-btn", {
            translateY: "40px",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
        });

        gsap.to(".about-content", {
            translateY: "60px",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => navigate('/'),
        });
    });



    return (
        <>
            <div className="h-[120px] w-full">
                <button
                    ref={elementRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    className={`close-btn
                            bg-close-btn-bg h-[46px] w-[46px] rounded-full border-2 absolute left-1/2 
                            transform -translate-x-1/2 top-[40px] border-close-btn-edge
                            ` }>
                    <RiCloseLine className="text-[22px] m-auto text-4xl" />
                </button>
            </div>

            {children}

        </>
    );
}

export default AlternateLayout;
