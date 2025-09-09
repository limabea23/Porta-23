"use client";

import { useState } from "react";
import axios from "axios";
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
            console.log(response.data);
            setDrinkDetails(response.data.drinks[0]);
        } catch (error) {
            console.error("Erro ao buscar detalhes do drink:", error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Porta 23 - <span className={styles.tituloOutline}>Entre. Descubra. Sinta.</span></h1>
            <p className={styles.subtitulo}>Um convite à travessia para outro universo — mais íntimo, mais sensorial. Um lugar escondido à vista de todos, onde cada drink é uma chave e cada noite, uma história.</p>

            <div className={styles.button}>
                <button onClick={buscarDrinks} disabled={loading} className={styles.btnLiberar}>
                    {loading ? "Carregando ..." : "Liberar a próxima história"}
                </button>
            </div>

            <div className={styles.gridDrinks}>
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className={styles.cardDrink}>
                        <img
                            src={drink.strDrinkThumb}
                            alt={drink.strDrink}
                            className={styles.imgDrink}
                        />
                        <h2 className={styles.nomeDrink}>{drink.strDrink}</h2>
                        <p className={styles.tipoDrink}>{drink.strAlcoholic}</p>

                        <button onClick={() => buscarDetalhesDrink(drink.idDrink)} className={styles.detalhes}>
                            Ver Detalhes
                        </button>
                    </div>
                ))}
            </div>

            { drinkDetails && (
            <div className={styles.detailsDrink}>
                <h2 className={styles.tituloDrink}>{drinkDetails.strDrink}</h2>
                <img
                    src={drinkDetails.strDrinkThumb}
                    alt={drinkDetails.strDrink}
                    className={styles.imgDrink}
                />
                <p><strong>Categoria:</strong> {drinkDetails.strCategory}</p>
                <p><strong>Tipo:</strong> {drinkDetails.strAlcoholic}</p>
                <p><strong>Instruções:</strong> {drinkDetails.strInstructions}</p>
            </div>
            )
            }

        </div>
    );
}