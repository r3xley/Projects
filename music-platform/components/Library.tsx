"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LiberaryProps {
    songs: Song[];
}

const Library: React.FC<LiberaryProps> = ({
    songs
}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }
        //check for sub
        return uploadModal.onOpen();

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
                {songs.map((item) => (
                    <MediaItem
                        onClick={() => { }}
                        key={item.id}
                        data={item}
                    />
                ))}

            </div>
        </div>
    );
}

export default Library;