"use client";

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-black  to-pink-900 text-white px-10 py-16">

            <div className="max-w-lg space-y-6">
                <h1 className="text-sm tracking-widest text-pink-400 uppercase">Minha aplicação CRUD</h1>
                <h2 className="text-4xl md:text-5xl font-extrabold">PORTA 23</h2>

                <p className="text-lg"> 2TDS1 - Técnico em Desenvolvimento de Sistemas - SENAI</p>
                <p className="text-xl font-medium">Beatriz Lima</p>

                <blockquote className="italic text-gray-300 border-l-4 border-pink-500 pl-4">"Nós temos uma escolha... de viver ou apenas existir." - Harry Styles</blockquote>

                <Link href="/apiinfo">
                    <button className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold shadow-lg"> Entre. Descubra. Sinta. 🥂</button>
                </Link>
            </div>

            <div className="mt-10 md:mt-0 md:ml-10 relative">
                <div className="">
                    <Image
                    src="/img/Beatriz-Avatar2.png"
                    alt="Avatar da desenvolvedora do projeto"
                    width={250}
                    height={250}
                    className="object-cover"
                    priority
                    />
                </div>
            </div>
        </div>
    )
}