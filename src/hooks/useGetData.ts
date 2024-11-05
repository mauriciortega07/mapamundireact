import React, { useEffect, useState } from "react";
import axios from "axios";


//TYPE ESTADOS
type getDataState = {
    countries: countries[];
    isLoading: boolean;
    error: string | null;
}

//Type RESUlTADOS API
type countries = {
    cca2: string;
    capital: string[];
    translations: {spa:{common: string}}
    flags: {png: any},
    continents: string[],
    population: number,
    languages: {eng: string},
    name: {common: string},
    maps: {googleMaps: string}
}

const useGetData = (url: string) => {
    //DECLARACION DE ESTADOS
    const [dataSate, setDataState] = useState<getDataState>({
        countries: [],
        isLoading: true,
        error: null
    });

    //FUNCIONALIDAD
    useEffect(() => {
        setTimeout(() => {
            const getData = async (url: string) => {
                try {
                    const response = await axios.get(url);
                    setDataState({ countries: response.data, isLoading: false, error: null });
                    console.log(response.data)
                } catch (error) {
                    setDataState({ countries: [], isLoading: false, error: "Error al obtener los paises" })
                }
            }

            getData(url);

        }, 2000);

    }, []);

    return dataSate;
}

export default useGetData;