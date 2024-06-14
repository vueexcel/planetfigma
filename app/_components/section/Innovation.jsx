import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Innovation = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1 
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const items = [
        ['John Deo', 'Alex Smith'],
        ['Jane Doe', 'Alice Johnson'],
        ['Michael Brown', 'William Davis'],
        ['Emily Clark', 'Olivia Garcia'],
        ['David Martinez', 'Daniel Hernandez'],
        ['Sophia Wilson', 'Mia Anderson'],
        ['James Thomas', 'Benjamin Jackson'],
        ['Emma White', 'Ava Thompson'],
        ['Liam Robinson', 'Noah Lee'],
        ['Isabella Lewis', 'Charlotte Walker'],
        ['Lucas Hall', 'Ethan Young'],
        ['Amelia King', 'Harper Allen'],
        ['Henry Wright', 'Alexander Scott'],
        ['Evelyn Adams', 'Abigail Harris'],
        ['Mason Nelson', 'Logan Martinez'],
        ['Avery Perez', 'Aria Roberts'],
        ['Elijah Turner', 'Sebastian Phillips'],
    ];
    
    return (
        <div className="w-full overflow-hidden mt-36 max-1200" ref={ref}>
            <motion.h4
                className="max-w-sm mx-auto text-2xl text-center text-white uppercase"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.8 }}
            >
                Governors Driving 10Planet&apos;s Innovation
            </motion.h4>

            <motion.div
                className="mt-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="flex flex-wrap justify-center gap-2">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center p-2.5 bg-[#151719] rounded-full pr-5"
                            variants={itemVariants}
                        >
                            <div className="size-10 rounded-full bg-[#282B30]"></div>
                            <p className="ml-4 text-white">
                                {item[0]} <span className="opacity-50">{'//'}</span> {item[1]}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Innovation;
