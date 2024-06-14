import Image from "next/image"

const WelcomeSection = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-20 mg:px-4">
            <h5 className="max-w-[300px] text-center text-3xl text-white uppercase mb-6">
                Welcome to the singularity
            </h5>

            <div className="relative mt-8 welcome-bg mg:mx-12 w-full bg-[url('/images/line-group.png')] py-20 text-center bg-center flex justify-center bg-no-repeat " style={{ backgroundSize: '100%', backgroundPositionY: 'bottom' }}>
                <Image
                    src="/images/join-singularity.png"
                    alt="Join Singularity"
                    height={700}
                    width={720}
                    className="absolute z-10"
                    style={{ left: '50%', transform: 'translate(-50%, -50%)', top: '50%' }}
                />
                <button className="relative z-10 flex items-center text-3xl text-white opacity-70" type="button">
                    #JoinSingularity

                    <Image
                        src="/icons/arrow.png"
                        alt="Arrow"
                        height={24}
                        width={24}
                        className="ml-2"
                    />
                </button>
            </div>
        </div>
    )
}

export default WelcomeSection