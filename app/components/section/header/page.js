import Card from "../../common/heroCard/page";
import Image from "next/image";
export default function ExampleComponent() {
  return (
    <div className="bg-black  pt-20">
      <div className="font-abc-monument text-[52px] text-white font-normal leading-custom tracking-tight-custom text-center">
        Talk to a <span className="text-orange-600">Celebrity_</span>
      </div>
      <div className="font-abc-monument text-[52px] text-white font-normal leading-custom tracking-tight-custom text-center">
        via custom LLM Bots
      </div>
      <div className="font-abc-monument text-[22px] text-gray-500 font-normal leading-custom tracking-tight-custom text-center">
        Explore our Deva-Bots, a New Era of Real-time Interactions
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
        <Card
          name="Jeff Bezos"
          nickname="@jeffbezos"
          image="/hero1.svg"
        />
        <Card
          name="Elon Musk"
          nickname="@elonmusk"
          image="/hero2.svg"
        />
        <Card
          name="Leonardo de Vinchi"
          nickname="@leonardodevinchi"
          image="/hero3.svg"
        />
        <Card name="Dua Lipa" nickname="@dualipa" image="/hero4.svg" />
        <Card
          name="Tom Cruise"
          nickname="@tomcruise"
          image="/hero5.svg"
        />
      </div>
      <div className="flex justify-center mt-20">
        <Image
          src="/planet.svg"
          alt="Workflow"
          width={800}
          height={800}
        />
      </div>
      jsx Copy code
      <div className="flex flex-col lg:flex-row">
        {/* div 1 */}
        <div className="flex flex-col lg:w-1/4 border border-gray-800 lg:ml-10 p-4">
          <div className="flex flex-col items-center border border-gray-800 p-4">
            <div>
              <Image
                src="/logo2.svg"
                alt="Workflow"
                width={80}
                height={80}
              />
            </div>
            <p className="text-white p-4 text-xl text-center lg:text-left">
              10Planet Forum wants to access your Deva account
            </p>
            <div className="flex mt-7 items-center">
              <div>
                <Image
                  src="/elon.svg"
                  alt="Workflow"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-white ml-2">
                Elon Musk<div className="text-gray-500">@elonmusk</div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="relative rounded-full mt-7 bg-yellow-300 p-1 text-black text-xs hover:text-white w-full lg:w-64 h-8"
              >
                Authorise app
              </button>
            </div>
            <div>
              <button
                type="button"
                className="relative rounded-full mt-4 mb-6 bg-black p-1 text-white text-xs hover:text-white w-full lg:w-64 h-8"
              >
                Cancel
              </button>
            </div>
          </div>
          <p className="text-white mt-6 text-center lg:text-left">
            Connect your Deva account to 10Planet
          </p>
          <p className="text-gray-600 text-xs mt-1 text-center lg:text-left">
            Things this App can view:
          </p>
          <ul className="list-disc pl-5 mt-1 text-center lg:text-left">
            <li className="text-white">Username</li>
            <li className="text-white">Email</li>
          </ul>
          <p className="text-gray-600 text-xs mt-1 text-center lg:text-left">
            Things this App can do:
          </p>
          <ul className="list-disc pl-5 mt-1 text-center lg:text-left">
            <li className="text-white">Prompt your Deva AI</li>
          </ul>
        </div>
        {/* div 2 */}
        <div className="mt-10 lg:mt-0 lg:ml-20 lg:w-3/4 p-4">
          <p className="text-white text-4xl text-center lg:text-left">
            DEVA SSO
          </p>
          <hr className="mt-10 lg:mt-20 border-gray-700" />
          <p className="text-white mt-10 text-center lg:text-left">
            SIMPLIFIED ACCESS
          </p>
          <p className="text-gray-500 w-full lg:w-80 text-center lg:text-left mx-auto lg:mx-0">
            One login provides access to all of Deva. me's AI feature, streaming
            your experience
          </p>
          <hr className="mt-10 border-gray-700" />
          <p className="text-white mt-10 text-center lg:text-left">
            EFFORTLESS INTERACTION
          </p>
          <p className="text-gray-500 w-full lg:w-80 text-center lg:text-left mx-auto lg:mx-0">
            One login provides access to all of Deva. me's AI feature, streaming
            your experience
          </p>
          <hr className="mt-10 border-gray-700" />
          <p className="text-white mt-10 text-center lg:text-left">
            ENHANCED SECURITY
          </p>
          <p className="text-gray-500 w-full lg:w-80 text-center lg:text-left mx-auto lg:mx-0">
            One login provides access to all of Deva. me's AI feature, streaming
            your experience
          </p>
          <hr className="mt-10 border-gray-700" />
        </div>
      </div>
      <hr className="mt-10 border-gray-700"></hr>
      <div className="flex justify-between">
        <div className="mt-4 ml-10">
          <Image
            src="/logofinal.svg"
            alt="Workflow"
            width={150}
            height={100}
          />
        </div>
        <div className="flex mr-10">
          <Image src="/link1.svg" alt="Workflow" width={70} height={70} />
          <Image src="/link2.svg" alt="Workflow" width={70} height={70} />
          <Image src="/link3.svg" alt="Workflow" width={70} height={70} />
          <Image src="/link4.svg" alt="Workflow" width={70} height={70} />
          <Image src="/link5.svg" alt="Workflow" width={70} height={70} />
        </div>
      </div>
      <hr className=" border-gray-700"></hr>
      <div className="flex ml-10 mr-10 justify-center md:flex-row gap-x-44">
        <div className="p-2">
          <p className="text-gray-500 mt-10">10PLANET</p>
          <p className="text-white mt-5">Network</p>
          <p className="text-white mt-5">Foundation</p>
          <p className="text-white mt-5">Network Number</p>
          <p className="text-white mt-5">Pross</p>
          <p className="text-white mt-5">Blog</p>
          <p className="text-white mt-5">Brand</p>
          <p className="text-white mt-5">Career</p>
        </div>
        <div className="p-2">
          <p className="text-gray-500 mt-10">DEVELOPERS</p>
          <p className="text-white mt-5">Developer Docs</p>
          <p className="text-white mt-5">GitHub</p>
        </div>
        <div className="p-2">
          <p className="text-gray-500 mt-10">COMMUNITY</p>
          <p className="text-white mt-5">Event</p>
          <p className="text-white mt-5">Forum </p>
          <p className="text-white mt-5">Governance</p>
          <p className="text-white mt-5">Regional Comunities</p>
        </div>
        <div className="p-2">
          <p className="text-gray-500 mt-10">ECOSYSTEM</p>
          <p className="text-white mt-5">grants </p>
          <p className="text-white mt-5">projects</p>
          <p className="text-white mt-5">jobs</p>
          <p className="text-white mt-5">explore</p>
          <p className="text-white mt-5">Node Operations</p>
          <p className="text-white mt-5">use Cases</p>
        </div>
        <div className="p-2">
          <p className="text-gray-500 mt-10">RESOURCES</p>
          <p className="text-white mt-5">get started</p>
          <p className="text-white mt-5">10Planet Assistant</p>
          <p className="text-white mt-5">10Planet whitepaper</p>
          <p className="text-white mt-5">Glosary</p>
        </div>
      </div>
    </div>
  );
}







