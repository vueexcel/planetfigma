import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Authorization = () => {
    const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const user = {
        name: "Elon Musk",
        username: "@elonmusk",
        avatar: "/images/avatar.png"
    };

    const details = [
        {
            title: "Simplified Access",
            description: "One login provides access to all of Deva.me's AI features, streamlining your experience."
        },
        {
            title: "Effortless Interaction",
            description: "Easily engage with AI-DApps, making your interaction seamless and intuitive."
        },
        {
            title: "Enhanced Security",
            description: "Enjoy high-standard protection for your data, ensuring your information is secure and private."
        }
    ];

    const appPermissions = [
        {
            title: "Things this App can view:",
            items: ["Username", "Email"]
        },
        {
            title: "Things this App can do:",
            items: ["Prompt your Deva AI"]
        }
    ];

    return (
        <div className="flex flex-col w-full px-6 my-20 mg:mt-32 mg:flex-row max-1200 xl:px-0">
            <h5 className="mb-8 text-2xl text-white uppercase mg:hidden">DEVA SSO</h5>

            <motion.div
                className="flex flex-col items-center p-4 pb-0 border border-gray-800 rounded-sm mg:max-w-[380px] sm:ml-8 2xl:ml-0"
                ref={leftRef}
                initial="hidden"
                animate={leftInView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <Image 
                    src="/images/auth.png"
                    alt="Auth"
                    height={90}
                    width={90}
                    className="mt-8"
                />

                <h5 className="mt-8 text-2xl text-center text-white">10Planet Forum wants to access your Deva account.</h5>

                <div className="flex items-center my-8 text-white">
                    <Image 
                        src={user.avatar}
                        alt="avatar"
                        height={40}
                        width={40}
                        className="rounded-full"
                    />

                    <div className="block ml-2 text-sm max-h-max">
                        <b className="block">{user.name}</b>
                        <span className="text-gray-500">{user.username}</span>
                    </div>
                </div>

                <button className="rounded-full hover:opacity-80 w-3/4 font-medium py-2 px-2.5 bg-yellow-400 text-center">
                    Authorise app
                </button>
                <button className="mt-3 rounded-full w-3/4 font-medium py-2 px-2.5 text-white hover:opacity-80 text-center">
                    Cancel
                </button>

                <div className="w-full py-8 mt-4 border-t border-t-gray-800">
                    <p className="text-white">Connect your Deva account to 10Planet Forum.</p>
                    {appPermissions.map((permission, index) => (
                        <div key={index} className="mt-6">
                            <p className="text-gray-500">{permission.title}</p>
                            <ul className="pl-8 mt-3 text-white list-disc">
                                {permission.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="w-full mg:ml-16"
                ref={rightRef}
                initial="hidden"
                animate={rightInView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <h5 className="hidden pb-16 mt-4 text-5xl text-white uppercase border-b border-b-gray-800 mg:block">DEVA SSO</h5>
                <ul className="block">
                    {details.map((detail, index) => (
                        <li key={index} className="py-6 text-white mg:border-b mg:border-b-gray-800 mg:mb-4">
                            <b className="block pb-3 mb-4 text-lg font-normal uppercase border-b border-b-gray-800 mg:border-b-0">
                                {detail.title}
                            </b>
                            <span className="block max-w-md">{detail.description}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Authorization;
