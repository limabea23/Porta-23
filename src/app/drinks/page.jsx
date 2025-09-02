"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./drink.module.css";

export default function Page() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [drinkDetails, setDrinkDetails] = useState(null);

    const buscarDrinks = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
            setDrinks(response.data.drinks);
        } catch (error) {
            console.error("Erro ao buscar drinks:", error);
        } finally {
            setLoading(false);
        }
    };

    const buscarDetalhesDrink = async (idDrink) => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
            setDrinkDetails(response.data.drinks[0]); // O resultado é um array, mas contém apenas um item
        } catch (error) {
            console.error("Erro ao buscar detalhes do drink:", error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Porta 23 - Entre. Descubra. Sinta.</h1>
            <p className={styles.subtitulo}>Um convite à travessia para outro universo — mais íntimo, mais sensorial. Um lugar escondido à vista de todos, onde cada drink é uma chave e cada noite, uma história.</p>

            <div className={styles.button}>
                <button onClick={buscarDrinks} disabled={loading} className="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600">
                        {loading ? "Carregando ..." : "Liberar a próxima história"}
                    </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drinks.map((drink) => (
                        <div key={drink.idDrink} className="bg-white p-4 rounded-lg shadow">

                <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-48 object-cover"
                />
                            <h2 className="text-xl font-bold">{drink.strDrink}</h2>
                            <p className="text-black-600">{drink.strAlcoholic}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
}