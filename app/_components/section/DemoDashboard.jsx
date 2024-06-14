import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const DemoDashboard = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="flex justify-center w-full px-6 my-6 2xl:px-0 max-1200">
            <motion.div
                className="block md:hidden"
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <Image 
                    src="/images/Home_mobile.png"
                    alt="Demo Dashboard Mobile"
                    height={800}
                    width={800}
                    className="w-full h-auto max-w-7xl"
                />
            </motion.div>
            <motion.div
                className="hidden md:block"
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <Image 
                    src="/images/Home.png"
                    alt="Demo Dashboard"
                    height={800}
                    width={1400}
                    className="w-full h-auto max-w-7xl"
                />
            </motion.div>
        </div>
    );
}

export default DemoDashboard;
