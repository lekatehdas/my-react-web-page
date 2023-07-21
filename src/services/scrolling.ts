import {scroller} from "react-scroll";

const scrollTo = (to: string) => {
    scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        offset: -45,
        duration: 500,
    })
}

export default scrollTo