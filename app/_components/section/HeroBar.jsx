import Image from "next/image";

const HeroBar = () => {
    return (
        <>
            <div className="relative flex flex-col items-center w-full bg-center bg-[url('/images/herobar-bg.png')]">
                <h1 className="w-full px-5 mt-16 text-lg text-center text-orange-500 uppercase sm:mt-28">
                    The Digital Planet of Humans & AIs
                </h1>
                <h2 className="w-full max-w-3xl px-5 mt-12 text-6xl text-center text-white uppercase sm:px-0 xs:text-7xl font-lakonet">
                    Layer One Blockchain for AI Economies
                </h2>

                <div
                    className="flex items-center justify-center w-full px-5 mt-12"
                    style={{
                        background:
                            "linear-gradient(to top, #0F1012 70%, transparent 100%)",
                    }}
                >
                    <Image
                        src="/images/herobar-image.png"
                        alt="Hero Bar"
                        height={900}
                        width={900}
                        className="rounded-full drop-shadow-xl"
                    />
                </div>
            </div>
            <p className="max-w-4xl mx-auto mt-32 text-2xl text-center text-white uppercase">
                Integrated AI economies made simple. The only platform designed for
                seamless blockchain, smart contracts, & AI-DApps integration
            </p>
        </>
    );
};

export default HeroBar;
