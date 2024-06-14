'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Feature = () => {
    const [scrollIndex, setScrollIndex] = useState(0)
    const scrollView = useRef(null)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    useEffect(() => {
        scrollView.current.scrollTo({ left: scrollView.current.offsetWidth * scrollIndex, top: 0, behavior: 'smooth' });
    }, [scrollIndex])

    const scrollLeft = () => {
        setScrollIndex(scrollIndex === 0 ? 0 : scrollIndex - 1);
    }

    const scrollRight = () => {
        setScrollIndex(scrollIndex === 3 ? 0 : scrollIndex + 1);
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className="justify-around w-full px-4 mt-32 mg:flex mg:px-12 max-1200">
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                className="bg-[#151719] w-full max-w-[530px] mg:max-w-[600px] mx-auto mg:mx-0 mg:min-w-[480px] mg:max-h-[300px]"
            >
                <div className="text-center w-full h-full bg-[url(/images/feature-bg.png)] px-8 py-4 flex bg-center justify-center items-center bg-no-repeat">
                    <Image
                        src="/images/feature-1.png"
                        alt="Feature Section"
                        height={160}
                        width={160}
                    />
                </div>
            </motion.div>

            <ul ref={scrollView} className="flex ml-6 items-center mt-6 mg:max-w-[500px] overflow-x-auto pointer-events-none mg:pr-8 mg:mt-0 mg:flex-col no-scroll-view" style={{ transform: `translateX(-${scrollIndex * 100}%)` }}>
                <motion.li 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    className={`flex-shrink-0 w-full mb-4 mr-1 mg:flex-shrink mg:mr-0 mg:mb-10`}
                >
                    <Image
                        src="/images/f1.png"
                        alt="Incentivized contribution"
                        width={60}
                        height={60}
                    />
                    <h5 className="my-4 text-white uppercase">Incentivized contribution</h5>
                    <p className="text-sm text-white">10Planet offers ways to thrive and get rewarded for your contribution to Als and AI economies</p>
                </motion.li>
                <motion.li 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    className={`flex-shrink-0 w-full mb-4 mr-1 mg:flex-shrink mg:mr-0 mg:mb-10`}
                >
                    <Image
                        src="/images/f2.png"
                        alt="Incentivized contribution"
                        width={60}
                        height={60}
                    />
                    <h5 className="my-4 text-white uppercase">BEAUTIFUL UX & DX</h5>
                    <p className="text-sm text-white">Seamless user & developer experience, making it easy to engage with AI-DApps and infrastructure</p>
                </motion.li>
                <motion.li 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    className={`flex-shrink-0 w-full mb-4 mr-1 mg:flex-shrink mg:mr-0 mg:mb-10`}
                >
                    <Image
                        src="/images/f3.png"
                        alt="Incentivized contribution"
                        width={60}
                        height={60}
                    />
                    <h5 className="my-4 text-white uppercase">MERITOCRATIC REWARDS</h5>
                    <p className="text-sm text-white">Earn $10COIN (10P) directly for your contributions. ensuring a straightforward and equitable reward process</p>
                </motion.li>
                <motion.li 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeIn}
                    className={`flex-shrink-0 w-full mb-4 mr-1 mg:flex-shrink mg:mr-0 mg:mb-10`}
                >
                    <Image
                        src="/images/f4.png"
                        alt="Incentivized contribution"
                        width={60}
                        height={60}
                    />
                    <h5 className="my-4 text-white uppercase">EVM & IBC COMPATIBLE</h5>
                    <p className="text-sm text-white">Familiar to Web3 developers and compatible with Sovereign Chains</p>
                </motion.li>
            </ul>

            <div className="flex items-center justify-between w-full py-2 border-t border-t-gray-800 mg:hidden">
                <button onClick={scrollLeft} className="p-3 transition-all rounded-full hover:opacity-80 hover:bg-slate-900">
                    <Image src={'/icons/arrow-left.png'} alt="menu" height={24} width={24} />
                </button>
                <div className="flex items-center">
                    <span className={"block mx-1 rounded-full " + (scrollIndex === 0 ? "bg-orange-500 size-4" : "bg-[#282B30] size-2")}></span>
                    <span className={"block mx-1 rounded-full " + (scrollIndex === 1 ? "bg-orange-500 size-4" : "bg-[#282B30] size-2")}></span>
                    <span className={"block mx-1 rounded-full " + (scrollIndex === 2 ? "bg-orange-500 size-4" : "bg-[#282B30] size-2")}></span>
                    <span className={"block mx-1 rounded-full " + (scrollIndex === 3 ? "bg-orange-500 size-4" : "bg-[#282B30] size-2")}></span>
                </div>
                <button onClick={scrollRight} className="p-3 transition-all rounded-full hover:opacity-80 hover:bg-slate-900">
                    <Image src={'/icons/arrow-left.png'} alt="menu" height={24} width={24} className="rotate-180" />
                </button>
            </div>
        </div>
    )
}

export default Feature
