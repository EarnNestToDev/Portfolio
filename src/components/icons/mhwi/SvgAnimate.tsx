"use client";

import { useEffect, useState } from "react";

import SVG1 from "@/components/icons/mhwi/light/0";
import SVG2 from "@/components/icons/mhwi/light/1";
import SVG3 from "@/components/icons/mhwi/light/2";
import SVG4 from "@/components/icons/mhwi/light/3";

import SVGMessage from "@/components/icons/message_circle_outline";

const lights = [SVG1, SVG2, SVG3, SVG4];

const AnimatedLights = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % lights.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`
                relative
                w-full
                h-full
                flex
                items-center
                justify-center
            `}
        >

            {lights.map((Component, i) => (
                <div
                    key={i}
                    className={`
                        absolute inset-0
                        transition-opacity duration-600 ease-in
                        flex items-center justify-center
                        ${index === i ? "opacity-100" : "opacity-0"}
                    `}
                >

                    <Component
                        fill="#6aa6f0"
                        opacity={0.2}
                        height={"100%"}
                        width={"100%"}
                    // className="blur-[2px]"
                    />

                </div>
            ))}

            <SVGMessage
                width={24}
                height={24}
                stroke="white"
                className={`
                    drop-shadow-[0_0_5px_#00b78e]
                    scale-250
                    animate-[pulse_5s_ease-in-out_infinite]
                `}
            />
        </div>
    );
};

export default AnimatedLights;