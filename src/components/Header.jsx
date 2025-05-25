import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center mb-5">
            <img src="/pic9.gif" alt="cover-image" className="w-full md:h-[250px] rounded-lg" />
            <h1 className="text-emerald-500 text-3xl md:text-4xl font-bold text-center">BrainRot Language Converter</h1>
            <p className="text-neutral-400 text-md items-center text-center">Turn normal text into chaotic fun with the brainrot converter. Inspired by the randomness of internet culture, this tool transforms anything you write into something absurd, silly, and strangely relatable.</p>
        </div>
    )
}

export default Header;