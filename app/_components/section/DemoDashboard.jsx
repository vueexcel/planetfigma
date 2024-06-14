import Image from "next/image"

const DemoDashboard = () => {
    return (
        <div className="flex justify-center w-full px-6 my-6">
            <div className="block md:hidden">
                <Image 
                    src="/images/Home_mobile.png"
                    alt="Demo Dashboard Mobile"
                    height={800}
                    width={800}
                    className="w-full h-auto max-w-7xl"
                />
            </div>
            <div className="hidden md:block">
                <Image 
                    src="/images/Home.png"
                    alt="Demo Dashboard"
                    height={800}
                    width={1400}
                    className="w-full h-auto max-w-7xl"
                />
            </div>
        </div>
    )
}

export default DemoDashboard
