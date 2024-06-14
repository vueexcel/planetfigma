import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const Contributor = () => {
    const contributionItems = [
        {
            src: "/images/c1.png",
            alt: "Data Provenance",
            title: "Data Provenance",
            description: "Ensures clear records of AI development contributions using blockchain, protecting integrity and verifying contributions​​."
        },
        {
            src: "/images/c2.png",
            alt: "Contribution Attribution",
            title: "Contribution Attribution",
            description: "Recognizes and fairly compensates all forms of AI development contributions, moving beyond traditional asset ledgers."
        },
        {
            src: "/images/c3.png",
            alt: "Awards System",
            title: "Awards System",
            description: "Rewards contributions with Ores & 10coin recurring and retroactive awards, linking efforts directly to rewards."
        }
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full px-6 mt-32 mb-20 text-white max-1200">
            <div className="flex flex-col items-start mb-12 mg:px-8 mg:items-center mg:flex-row">
                <div className="mb-12">
                    <h5 className="max-w-sm mb-4 text-3xl uppercase">
                        Rewarding AI Contributions
                    </h5>
                    <p className="max-w-sm">
                        An Operating Protocol for AI economies, where AI development is directly rewarded and contributions are attributed on-chain, evolving blockchains to asset & attribution ledgers.
                    </p>
                </div>
                <Image 
                    src="/images/circle.png"
                    alt="Circle Image"
                    width={383}
                    height={383}
                    className="h-auto block mx-auto w-[460px]"
                />
            </div>
            <motion.div
                className="flex flex-col justify-between w-full px-5 mx-auto border border-gray-800 sm:flex-row"
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                {contributionItems.map((item, index) => (
                    <div key={index} className={`w-full p-5 border-b sm:border-r sm:border-r-gray-800 ${index === contributionItems.length - 1 ? 'border-b-0 mg:border-r-0' : 'border-b-gray-800 sm:border-b-0'}`}>
                        <Image 
                            src={item.src}
                            alt={item.alt}
                            width={50}
                            height={50}
                            className="mb-12"
                        />
                        <h6 className="mb-2 uppercase">{item.title}</h6>
                        <p className="text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Contributor;
