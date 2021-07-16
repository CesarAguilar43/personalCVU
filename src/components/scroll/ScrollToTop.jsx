import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 100) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <i><FontAwesomeIcon icon={faChevronCircleUp} size="2x" /></i>
        </div>
    );
};

export default ScrollToTop;