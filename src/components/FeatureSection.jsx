import { features } from "../constants/Constants"

const FeatureSection = () => {
    return (
        <div className="relative mt-20 boder-n border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-200 text-blue-800 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Feature
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Easily build 
                    <span className="gradient-text animate-colorwave">
                        {" "}your code
                    </span>                    
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 p-2 text-blue-800 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                                <p className="text-md p-2 text-neutral-600 mb-20 ">{feature.description}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeatureSection