import Image from "next/image";

const UseCase = () => {
    const useCaseItems = [
        { src: "/images/t1.png", alt: "AI Personalization Hub", text: "AI Personalization Hub" },
        { src: "/images/t2.png", alt: "Interactive AI Chats", text: "Interactive AI Chats" },
        { src: "/images/t3.png", alt: "Karma Rewards System", text: "Karma Rewards System" }
    ];

    return (
        <div className="w-full px-6 mb-12 mt-28">
            <div className="w-full mg:flex">
                <div className="block">
                    <Image
                        src={"/images/play.png"}
                        alt="Play Image"
                        height={110}
                        width={110}
                        className="mx-auto"
                    />
                </div>
                <div className="w-full max-w-xl mg:ml-10">
                    <h5 className="mt-4 text-2xl text-center text-white uppercase mg:text-start">Use case: deva</h5>
                    <p className="mt-4 text-sm text-center text-white mg:text-start">Deva is a revolutionary AI-driven application within the 10Planet ecosystem, harnessing our advanced blockchain infrastructure.</p>
                </div>
            </div>
            <div className="w-full mt-10">
                <ul className="items-center w-full border border-gray-800 mg:flex mg:border-b-0 mg:border-r-0 mg:border-l-0">
                    {useCaseItems.map((item, index) => (
                        <li key={index} className={`flex items-center w-full p-3 px-4 border-b mg:py-4 mg:border-b-0 ${index === useCaseItems.length - 1 ? 'border-b-0' : 'border-b-gray-800'}`}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                height={35}
                                width={35}
                                className="inline-block"
                            />
                            <p className="ml-4 text-white">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UseCase;
