import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const Attribute = () => {
    const sections = [
        {
            title: "Contributors",
            description: "Thousands of people contribute data & knowledge to AIs that are used daily."
        },
        {
            title: "Attribution",
            description: "Almost impossible to attribute and reward these micro-contributions."
        },
        {
            title: "Data",
            description: "Foundation AI models are trained on data from billions of writers online."
        },
        {
            title: "Revenue",
            description: "Lack of programmatic revenue sharing for AI contributors."
        }
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="flex flex-col w-full px-6 mt-28 mg:flex-row max-1200">
            <h5 className="mb-6 text-3xl text-white uppercase mg:hidden">
                The Attribution Challenge
            </h5>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <Image 
                    src="/images/attribute.png"
                    alt="Attribute"
                    height={300}
                    width={380}
                    className="mx-auto mg:max-w-[340px]"
                />
            </motion.div>

            <div className="text-white sm:ml-20 mg:w-2/3">
                <h5 className="hidden mt-6 mb-4 text-4xl text-white uppercase mg:block max-w-[380px]">
                    The Attribution Challenge
                </h5>

                <div className="mt-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className={`block w-full mb-2 ${index < sections.length - 1 ? 'mg:mb-12' : ''}`}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeIn}
                        >
                            <h6 className="py-2 mb-2 text-lg text-white uppercase border-b border-b-gray-800">{section.title}</h6>
                            <p className="max-w-[300px] text-sm text-white mr-2">{section.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Attribute;
