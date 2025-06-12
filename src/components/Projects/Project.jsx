import { motion } from "motion/react"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5
        return {
            scale: 1,
            pathLength: 1.1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                repeat: Infinity,
            },
        }
    },
}
export default function PathDrawing() {
    return (
        <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={image}
        >
            <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                variants={draw}
                custom={1}
                style={shape}
                animate={{ x: [0, 100, 0] }}
                
            />
   </motion.svg>
    )
}


const image = {
    maxWidth: "80vw",
}

const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}