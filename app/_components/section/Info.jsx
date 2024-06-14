import Image from "next/image"

const InfoSection = () => {
    return (
        <div className="w-full px-6 mt-40 mb-20 overflow-hidden sm:px-12" style={{ maxWidth: '100vw' }}>
            <div className="flex justify-end mb-2 border-t border-t-gray-800">
                <p className="max-w-3xl my-8 text-white text-md">
                    10Planet provides a full-stack approach to building layer-one blockchains, smart contracts, and AI-DApps, offering integrated infrastructure, incentives, and UX/UI to reward AI contributions and support AI economies.
                </p>
            </div>

            <Image 
                src="/images/info-bg.png"
                alt="Info Section"
                height={400}
                width={2000}
                className="h-56 w-[150%] sm:h-auto mg:w-full"
                style={{ maxWidth: 'unset' }}
            />
        </div>
    )
}

export default InfoSection