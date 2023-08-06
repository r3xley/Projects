"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {

    };

    return (
        <div className="flex flex-col">
            <div
                className="
            flex
            items-center
            justify-between
            px-5
            pt-4
            "
            >
                <div
                    className="
            inline-flex
            items-center
            gap-x-2

            "
                >
                    <TbPlaylist className="text-cyan-500" size={26} />
                    <p className="
                    text-cyan-500
                    font-medium
                    text-md
                    ">
                        Library
                    </p>

                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                text-cyan-500 
                cursor-pointer 
                hover:text-cyan-200
                transition"
                />

            </div>
            <div className="
            flex 
            flex-col 
            ap-y-2 
            mt-4 
            px-3
            ">
                List of Songs!

            </div>
        </div>
    );
}

export default Library;