import Image from "next/image";
import Link from "next/link";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Footer = () => {
    const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const footerLinks = [
        {
            name: '10Planet',
            links: [
                { name: 'Network', href: '#' },
                { name: 'Network Numbers', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Brand', href: '#' },
                { name: 'Careers', href: '#' },
            ]
        },
        {
            name: '10Planet',
            links: [
                { name: 'Network', href: '#' },
                { name: 'Network Numbers', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Brand', href: '#' },
                { name: 'Careers', href: '#', newtab: true },
            ]
        },
        {
            name: 'Developers',
            links: [
                { name: 'Developers Docs', href: '#', newtab: true },
                { name: 'Github', href: '#', newtab: true }
            ]
        },
        {
            name: 'Community',
            links: [
                { name: 'Events', href: '#', newtab: true },
                { name: 'Forum', href: '#', newtab: true },
                { name: 'Governance', href: '#', newtab: true },
                { name: 'Regional Communities', href: '#', newtab: true }
            ]
        },
        {
            name: 'Ecosystem',
            links: [
                { name: 'Grants', href: '#' },
                { name: 'Projects', href: '#' },
                { name: 'Jobs', href: '#' },
                { name: 'Explorers', href: '#' },
                { name: 'Node Operation', href: '#' },
                { name: 'Use Cases', href: '#' }
            ]
        }
    ];

    return (
        <div className="w-full mt-16" ref={containerRef}>
            <motion.div
                className="w-full px-6 py-4 border-t border-b border-gray-800"
                initial="hidden"
                animate={containerInView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                <div className="flex items-center justify-between w-full max-1200">
                    <Link href={'/'} className='flex-1 hidden w-full hover:opacity-90 mg:flex'>
                        <Image
                            src={'/images/logo.svg'}
                            alt="Blockchain AI"
                            width={160}
                            height={80}
                        />
                    </Link>
                    <div className="flex items-center justify-between w-full px-8 mg:px-0 mg:max-w-max">
                        <Link href={'/'} className='p-2 mx-3 hover:opacity-90 hover:bg-slate-800'>
                            <Image
                                src="/icons/github.svg"
                                alt="Github"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href={'/'} className='p-2 mx-3 hover:opacity-90 hover:bg-slate-800'>
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href={'/'} className='p-2 mx-3 hover:opacity-90 hover:bg-slate-800'>
                            <Image
                                src="/icons/telegram.svg"
                                alt="Telegram"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <Link href={'/'} className='p-2 mx-3 hover:opacity-90 hover:bg-slate-800'>
                            <Image
                                src="/icons/x.svg"
                                alt="X"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="grid w-full grid-cols-2 gap-8 px-6 pb-8 mt-8 2xl:px-0 lg:grid-cols-3 xl:grid-cols-5 max-1200"
                ref={gridRef}
                initial="hidden"
                animate={gridInView ? 'visible' : 'hidden'}
                variants={fadeIn}
            >
                {footerLinks.map((item, index) => (
                    <div key={index} className="col-auto">
                        <h6 className="text-gray-600 uppercase">{item.name}</h6>
                        <ul className="mt-4">
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="flex items-center my-3 mb-4 text-sm text-white hover:opacity-75">
                                        {link.name}
                                        {link.newtab && <Image
                                            src="/icons/arrow.png"
                                            alt="Arrow"
                                            height={10}
                                            width={10}
                                            className="ml-2"
                                        />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <div className="w-full py-6 px-6 2xl:px-0 bg-[#151719]">
                <div className="flex items-center w-full text-sm max-1200">
                    <p className="mr-8 text-gray-600">@{new Date().getFullYear()} 10Planet Foundation</p>
                    <Link href={'/'} className="inline-block mr-4 text-white hover:opacity-75">Privacy</Link>
                    <Link href={'/'} className="text-white hover:opacity-75">Terms</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;