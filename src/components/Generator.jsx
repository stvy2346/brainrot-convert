import React from "react";
import { useState } from "react";

const Generator = () => {
    const [inputText,setInputText] = useState("");
    const [error,setError] = useState("");
    const [output,setOutput] = useState("");


    const generateText = async () => {
        if (!inputText.trim()) {
            return setError("Please provide text to convert.")
        }
        setError("");
        setOutput("a");
    }
    return (
        <div className="flex flex-col items-center gap-5">
            <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="bg-zinc-900 border rounded-lg border-2 border-emerald-600 p-4 text-white w-full h-[120px] focus:outline-none focus:border-emerald-200 focus:border-3"
                placeholder="Enter text here..."
            ></textarea>
            <button 
                onClick={generateText}
                className="border border-emerald-500 bg-emerald-500 border-[3px] px-2 py-1 rounded-lg text-white cursor-pointer hover:scale-105 transition active:scale-100 duration-150"    
            >
                Generate
            </button>
            {error && 
                <div className="text-rose-500">
                    {error}
                </div>
            }
            {output &&
                <div className="flex flex-col gap-3 w-full">
                    <h1 className="text-xl text-white font-bold ">Generated Text : </h1>
                    <div className="text-white w-full bg-zinc-900 p-3 rounded-md overflow-auto border border-2 border-emerald-600">{output}</div>
                </div>
            }
        </div>
    )
}

export default Generator;