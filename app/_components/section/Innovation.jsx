const Innovation = () => {
    const items = [
        ['John Deo', 'Alex Smith'],
        ['Jane Doe', 'Alice Johnson'],
        ['Michael Brown', 'William Davis'],
        ['Emily Clark', 'Olivia Garcia'],
        ['David Martinez', 'Daniel Hernandez'],
        ['Sophia Wilson', 'Mia Anderson'],
        ['James Thomas', 'Benjamin Jackson'],
        ['Emma White', 'Ava Thompson'],
        ['Liam Robinson', 'Noah Lee'],
        ['Isabella Lewis', 'Charlotte Walker'],
        ['Lucas Hall', 'Ethan Young'],
        ['Amelia King', 'Harper Allen'],
        ['Henry Wright', 'Alexander Scott'],
        ['Evelyn Adams', 'Abigail Harris'],
        ['Mason Nelson', 'Logan Martinez'],
        ['Avery Perez', 'Aria Roberts'],
        ['Elijah Turner', 'Sebastian Phillips'],
    ];
    
    return (
        <div className="w-full overflow-hidden mt-36">
            <h4 className="max-w-sm mx-auto text-2xl text-center text-white uppercase">
                Governors Driving 10Planet`&apos;s Innovation
            </h4>

            <div className="mt-16">
                <div className="flex flex-wrap justify-center gap-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center p-2.5 bg-[#151719] rounded-full pr-5">
                            <div className="size-10 rounded-full bg-[#282B30]"></div>
                            <p className="ml-4 text-white">{item[0]} <span className="opacity-50">{'//'}</span> {item[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Innovation