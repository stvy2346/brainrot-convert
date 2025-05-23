import React from "react";
import { FaGithub} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-black py-4">
            <div className="flex flex-col items-center gap-2">
                <p className="text-white">Made with 🧠 for the internet.</p>
                <a href="https://github.com/your-repo" target="_blank">
                    <div className="flex flex-row text-neutral-400 hover:text-white items-center gap-2">
                        <FaGithub/>
                        <p>GitHub</p>
                    </div>
                </a>
            </div>
        </footer>

    )
}

export default Footer;