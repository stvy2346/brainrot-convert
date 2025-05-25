import React from "react";
import { useState } from "react";
import {FaSpinner} from "react-icons/fa";

const Generator = () => {
    const [inputText,setInputText] = useState("");
    const [error,setError] = useState("");
    const [output,setOutput] = useState("");
    const [loading,setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const generateText = async () => {
        if (!inputText.trim()) {
            return setError("Please provide text to convert.")
        }
        setLoading(true);
        setError("");
        setOutput("a");

        const backendUrl = import.meta.env.VITE_BACKEND_URI;
        try{
            const res = await fetch(`${backendUrl}/api/chat`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({input: inputText}),
            });

            const data = await res.json();

            if(data?.choices?.[0]?.message?.content){
                setOutput(data.choices[0].message.content);
            }
            else{
                setError("No valid response.");
            }
        }catch(err){
            setError("Failed to generate text. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(output).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
        });
    };

    return (
        <div className="flex flex-col items-center gap-5">
            <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="bg-zinc-900 border rounded-lg border-2 border-emerald-600 p-4 text-white w-full h-[120px] focus:outline-none focus:border-emerald-200 focus:border-3"
                placeholder="Enter text here..."
                disabled={loading}
            ></textarea>
            <button 
                onClick={generateText}
                disabled={loading}
                className={`border border-emerald-500 bg-emerald-500 border-[3px] px-2 py-1 rounded-lg text-white cursor-pointer hover:scale-105 transition active:scale-100 duration-150 ${
                        loading ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                    }`}
            >
                {loading ? (
                    <div className="flex items-center gap-1">
                        <FaSpinner className="animate-spin"/>
                        Generating
                    </div>
                ) : (
                    "Generate"
                )

                }
            </button>
            {error && 
                <div className="text-rose-500">
                    {error}
                </div>
            }
            {output &&
                <div className="flex flex-col gap-3 w-full">
                    <h2 className="text-xl text-white font-bold ">Generated Text : </h2>
                    <div className="text-white w-full bg-zinc-900 p-3 rounded-md overflow-auto border border-2 border-emerald-600">
                        {output}
                    </div>

                    <button 
                        onClick={handleCopyToClipboard}
                        className="border border-emerald-500 bg-transparent border-[2px] px-2 py-1 rounded-lg text-emerald-500 cursor-pointer hover:bg-emerald-500 hover:text-white transition duration-150 self-center"
                    >
                        {copied ? (
                            <span className="duration-300">
                                Copied!
                            </span>
                        ) : (
                            "Copy to Clipboard"
                        )}
                    </button>
                </div>
            }
        </div>
    )
}

export default Generator;