import React, { useEffect, useState } from "react";
import Header from "../Header/index";
import axios from "axios";
import useGetData from "../../hooks/useGetData";
import useHandleInput from "../../hooks/useHandleInput";

type searchTextState = {
    searchText: string;
}

const MainContent = () => {
    //ESTADOS DEL COMPONENTE PRINCIPAL
    const [searchText, setSearchText] = useState({
        searchText: ""
    });

    /*FUNCION QUE DETECTA EL CAMBIO EN EL INPUT DE BUSCAR, SE PASA COMO PROPIEDAD
    AL COMPONENTE ""SearchBox""*/
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchText(
            (prev) => ({
                ...prev, [name]: value
            })
        )
    }


    //DESTRUCTURING DE LOS ESTADOS A USAR DEL HOOK 
    const { countries, isLoading, error } = useGetData('https://restcountries.com/v3.1/all');


    //FILTRANDO LOS ELEMENTOS DE ACUERDO A SU NOMBRE

    const countrieFilter = countries.filter(countrie => countrie.name.common.toLowerCase() === searchText.searchText)
    

    //FUNCION QUE MAPEA TODOS LOS RESULTADOS DEL ARRAY DE PAISES
    const renderResults = (countrieSearch: any) => (
        <section className="mainContent">
            {
                countrieSearch.map((countrie: { cca2: any; capital: any; translations: any; flags: any; continents: any; population: any; languages: any; name: any; maps: any; }) => {
                    const { cca2, capital, translations, flags, continents, population, languages, name,maps } = countrie;

                    const languagesAssignment = () => {
                        for (let idiomas in languages) {
                            return (<h5 className="mainContent__countrie--languages">Idiomas: {languages[idiomas]}</h5>)
                        }
                    }

                    return (
                        <article key={cca2} className="mainContent__countrie">
                            <img src={flags.png} alt={name.common} className="mainContent__countrie--flag"/>
                            <h5 className="mainContent__countrie--name">Nombre: {name.common}</h5>
                            <h5 className="mainContent__countrie--capital">Capital: {capital}</h5>
                            <h5 className="mainContent__countrie--continent">Continente: {continents}</h5>
                            <h5 className="mainContent__countrie--population">Poblacion: {population}</h5>
                            {languagesAssignment()}
                            <a href={maps.googleMaps} className="mainContent__countrie--ubication">Ubicacion</a>
                        </article>
                    )
                })
            }
        </section>
    )

    // FUNCION CON IF/ELSE QUE RENDERIZA EL CONTENIDO SEGUN LOS ESTADOS DEL HOOK useGetData()
    const renderContent = () => {
        if (isLoading) return <p className="isLoading">Cargando...</p>
        if (error) return <p className="errorMsg">Error al cargar las peliculas</p>
        if (searchText.searchText === '') return renderResults(countries);
        return renderResults(countrieFilter);
    }

    //RETURN DE SALIDA QUE MOSTRARA LOS COMPONENTES EN PANTALLA

    return (
        <>
            <Header appName='MapaMundi React' textSearch={searchText.searchText} inputChange={handleInputChange}/>
            <main>
            <div className="info">
                    <h2 className="info__title">Lista de Paises</h2>
                </div>
                {renderContent()}
            </main>
        </>
    )

}

export default MainContent;