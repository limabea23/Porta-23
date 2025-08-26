"use client";

import { useState } from "react";
import axios from "axios";

export default function Page() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarDrinks = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
            setDrinks(response.data);
        } catch (error) {
            console.error("Erro ao buscar drinks:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-grey-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-white mb-4">Entre. Descubra. Sinta.</h1>
                <p className="text-3xl text-center text-white mb-4">welcome to the world of drinks!</p>
                <div className="text-center mb-8">
                    <button
                        onClick={buscarDrinks}
                        disabled={loading}
                        className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600"
                    >
                        {loading ? "Carregando ..." : "🔍Buscar Drinks"}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drinks.map((drink) => (
                        <div key={drink.idDrink} className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-bold">{drink.strDrink}</h2>
                            <p className="text-gray-600">{drink.strAlcoholic}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
