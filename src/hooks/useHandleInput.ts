import React, { useEffect, useState } from "react";

type handleInputState = {
    searchText: string;
}

const useHandleInput = () => {
    const [searchText, setSearchText] = useState<handleInputState>({
        searchText: "mexico",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        console.log(e.target);
        setSearchText(
            (prev) => ({
                ...prev, [name]: value
            })
        )
    }


    return {
        handleInputChange,
        searchText
    }
}

export default useHandleInput;