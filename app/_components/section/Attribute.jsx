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

    return (
        <div className="flex flex-col w-full px-6 mg:flex-row mt-28">
            <h5 className="mb-6 text-3xl text-white uppercase mg:hidden">
                the attributtion challenge
            </h5>

            <Image 
                src="/images/attribute.png"
                alt="Attribute"
                height={300}
                width={380}
                className="mg:max-w-[340px] mx-auto"
            />

            <div className="text-white sm:ml-10 mg:w-2/3">
                <h5 className="hidden max-w-[380px] mt-6 mb-4 text-4xl text-white uppercase mg:block">
                    the attributtion challenge
                </h5>

                <div className="mt-12">
                    {sections.map((section, index) => (
                        <div key={index} className={`block w-full mb-2 ${index < sections.length - 1 ? 'mg:mb-12' : ''}`}>
                            <h6 className="py-2 mb-2 text-lg text-white uppercase border-b border-b-gray-800">{section.title}</h6>
                            <p className="max-w-[300px] text-sm text-white mr-2">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Attribute;
