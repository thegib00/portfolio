import "./Line.css"
import {useEffect, useRef} from "react";
import { useInView, motion } from "framer-motion";

function BasicLine() {
    // Ref to reference current component
    const ref = useRef(null)

    // Variable resulting in True or False
    const isInView = useInView(ref)

    // Line CSS changes
    const True:boolean = true;
    const False:boolean = false;

    const init = '';
    const anim = '';
    const trans = '';

    // Hook changing based on 'isInView' value
    useEffect(() => {
        console.log("Element is in view: ", isInView)

        if (isInView === True) {
            const init = 'y: 20, opacity: 0';
            const anim = 'y: 0, opacity: 1';
            const trans = 'duration: 0.5';
        } else {}

    }, [isInView, init, anim, trans])

    // Only loads once
    // Maybe combine states, props, and useEffect?

    return (
        <motion.div className="outter-box"
             ref={ref}
             initial={{ init }}
             animate={{ anim }}
             transition={{ trans }}
        >
        >
            <div className="stylish-line"></div>
        </motion.div>
    );

}

export default BasicLine;