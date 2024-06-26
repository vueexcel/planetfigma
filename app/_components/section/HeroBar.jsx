import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroBar = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        const iframe = document.getElementById('spline-iframe');
        if (iframe) {
            iframe.onload = () => {
                try {
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                    const linkToRemove = iframeDocument.querySelector('a');
                    if (linkToRemove) {
                        linkToRemove.remove();
                    }
                } catch (error) {
                    console.error("Cannot access iframe content: ", error);
                }
            };
        }
    }, []);

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    const subTitleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <>
            <div className="max-1200 relative flex flex-col items-center w-full bg-center bg-[url('/images/herobar-bg.png')]" ref={ref}>
                <motion.h1
                    className="w-full px-5 mt-16 text-lg text-center text-orange-500 uppercase sm:mt-28"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={titleVariants}
                    transition={{ duration: 0.8 }}
                >
                    The Digital Planet of Humans & AIs
                </motion.h1>
                <motion.h2
                    className="w-full max-w-3xl px-5 mt-12 text-6xl text-center text-white uppercase sm:px-0 xs:text-7xl font-lakonet"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={subTitleVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Layer One Blockchain for AI Economies
                </motion.h2>

                <motion.div
                    className="relative flex items-center justify-center w-full px-5 mt-12"
                    style={{
                        background: "linear-gradient(to top, #0F1012 70%, transparent 100%)",
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={imageVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative w-full overflow-hidden rounded-full drop-shadow-xl" style={{ maxWidth: 900 }}>
                        <iframe
                            id="spline-iframe"
                            src="https://my.spline.design/magicsphere-6cbe77d7ffd64939351664e036f1ac89/"
                            frameBorder="0"
                            className="w-full aspect-square"
                            style={{ maxWidth: 900 }}
                        ></iframe>
                    </div>
                </motion.div>
            </div>
            <motion.p
                className="max-w-4xl mx-auto mt-32 text-2xl text-center text-white uppercase"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Integrated AI economies made simple. The only platform designed for seamless blockchain, smart contracts, & AI-DApps integration
            </motion.p>
        </>
    );
};

export default HeroBar;
