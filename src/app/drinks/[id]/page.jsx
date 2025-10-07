"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import axios from "axios";
import styles from ".././drink.module.css";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function DrinkDetails() {
    const { id } = useParams(); 
    const [drinkDetails, setDrinkDetails] = useState(null);

    useEffect(() => {
        const fetchDrinkDetails = async () => {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                setDrinkDetails(response.data.drinks[0]);
            } catch (error) {
                console.error("Erro ao buscar detalhes do drink:", error);
            }
        };

        fetchDrinkDetails();
    }, [id]);

    if (!drinkDetails) {
        return <p>Carregando...</p>;
    }

    return (
        <>
        <Header />

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

        <Footer />
        </>
    );
}