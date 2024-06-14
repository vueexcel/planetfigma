import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Benifit = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="flex items-center justify-center w-full px-6 my-32 mb-20 max-1200">
            <motion.div
                className="w-full max-w-2xl bg-[url('/images/bg-1.png')] bg-center text-white bg-no-repeat h-[400px] flex justify-center items-center flex-col"
                style={{ backgroundSize: '100%' }}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <h5 className="max-w-xl text-3xl text-center uppercase">Receive the benefits of Web3 without the UX downsides</h5>
                <p className="max-w-lg mt-8 text-sm text-center uppercase">Web3 Incentivization // Web2 User Experience // Beautifully Integrated</p>
            </motion.div>
        </div>
    );
}

export default Benifit;
