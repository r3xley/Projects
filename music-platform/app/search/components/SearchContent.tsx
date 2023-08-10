"use client";

import { Song } from "@/types";

interface SearchContentProps {
    songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0) {
        return (
            <div className="
            flex
            flex-col
            gap-y-2
            w-full
            px-6
            text-cyan-500
            ">
                No songs found...
            </div>
        )
    }

    return (
        <div>
            Search Content
        </div>
    );
}

export default SearchContent;