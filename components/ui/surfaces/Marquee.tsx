import * as React from "react";
import Marquee from "react-fast-marquee";

const marqueeConfig = [{
    text: 'Unlock significant savings for a limited time only! Enjoy a 30% discount automatically applied at checkout when you choose us for your next construction project.'}, {text: "Don't miss out on this exclusive offer—act now and transform your vision into reality with our expert construction team."},{text: "Don't wait to turn your dream home into reality with our personalized approach to construction planning."}
]

    


const MarqueeComponent: React.FC = () => {
    
    return (
        <div className="bg-gray-900 py-3">
            <Marquee speed={100}>
            {marqueeConfig.map((item, index) => (
                    <span key={index} className="text-white flex flex-row gap-5 justify-center items-center px-4">
                        <p className="font-bold text-xs">
                            {item.text}
                        </p>
                       <span className="inline-block w-2 h-2 bg-white rounded-full ml-2"></span> 
                    </span>
                ))}

            </Marquee>
        </div>
    );
};

   
export default MarqueeComponent;
