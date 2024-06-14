import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const WelcomeSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full my-20 mg:px-4">
            <motion.h5
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                className="max-w-[300px] text-center text-3xl text-white uppercase mb-6"
            >
                Welcome to the Singularity
            </motion.h5>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                className="relative mt-8 welcome-bg mg:mx-12 w-full bg-[url('/images/line-group.png')] py-20 text-center bg-center flex justify-center bg-no-repeat"
                style={{ backgroundSize: '100%', backgroundPositionY: 'bottom' }}
            >
                <Image
                    src="/images/join-singularity.png"
                    alt="Join Singularity"
                    height={700}
                    width={720}
                    className="absolute z-10"
                    style={{ left: '50%', transform: 'translate(-50%, -50%)', top: '50%' }}
                />
                <motion.button
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    className="relative z-10 flex items-center text-3xl text-white opacity-70"
                    type="button"
                >
                    #JoinSingularity
                    <Image
                        src="/icons/arrow.png"
                        alt="Arrow"
                        height={24}
                        width={24}
                        className="ml-2"
                    />
                </motion.button>
            </motion.div>
        </div>
    )
}

export default WelcomeSection;
