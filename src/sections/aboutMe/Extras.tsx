"use client";

import Music from "@/sections/aboutMe/Music";
import Reflection from "@/sections/aboutMe/Reflections";
// import Videos from "@/sections/aboutMe/Videos";
import Videogames from "@/sections/aboutMe/Videogames";


function Extras() {

    return (
        <>

            <section
                className="bg-red-800 flex w-full min-h-50 items-stretch justify-center gap-2 rounded-lg p-2">

                <Music />
                <Reflection />

            </section>

            <section
                className="bg-red-800 flex w-full min-h-50 items-stretch justify-center gap-2 rounded-lg p-2">

                <Videogames />

            </section>

        </>
    );
};


export default Extras;