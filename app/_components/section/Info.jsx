import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const InfoSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2 
    });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="w-full px-6 mt-40 mb-20 overflow-hidden sm:px-12 max-1200" ref={ref}>
            <motion.div
                className="flex justify-end mb-2 border-t border-t-gray-800"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                transition={{ duration: 0.8 }}
            >
                <p className="max-w-3xl my-8 text-white text-md">
                    10Planet provides a full-stack approach to building layer-one blockchains, smart contracts, and AI-DApps, offering integrated infrastructure, incentives, and UX/UI to reward AI contributions and support AI economies.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={imageVariants}
                transition={{ duration: 0.8 }}
            >
                <Image 
                    src="/images/info-bg.png"
                    alt="Info Section"
                    height={400}
                    width={2000}
                    className="h-56 w-[150%] sm:h-auto mg:w-full"
                    style={{ maxWidth: 'unset' }}
                />
            </motion.div>
        </div>
    );
}

export default InfoSection;
