"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image";

export const categorias = [
  {
    nome: 'Universidade Federal',
    rota: 'universidade',
    imagem: '/img/universidade-federal-da-bahia-ufba.jpg',
    descricao: 'Uma das principais universidades com grande tradição cultural e acadêmica.',
  },
  {
    nome: 'Museu Histórico',
    rota: 'museu',
    imagem: '/img/Museu-Afro-Brasil.jpj.jpg',
    descricao: 'Um espaço cultural que preserva a história da cidade e do país.',
  },
  {
    nome: 'Ponto Turístico',
    rota: 'ponto-turistico',
    imagem: '/img/maracatu-olinda.jpg',
    descricao: 'Explore locais icônicos que representam a cultura e identidade local.',
  },
  {
    nome: 'Personalidade Cultural',
    rota: 'personalidade',
    imagem: '/img/dandara-dos-palmares1.jpg',
    descricao: 'Conheça figuras importantes que marcaram a história cultural local.',
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#E4D9F7] text-[#333333] font-sans p-8">

      {/*  TEXTO FORA DO MAIN */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 mb-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#5D3FD3]">Bem-vindo à EduCultura</h1>
          <p className="text-lg text-gray-700">
            A EduCultura é uma API REST que conecta estudantes a instituições culturais e educacionais, promovendo o acesso à cultura e ao conhecimento. 
            Nossa missão é facilitar o aprendizado e a apreciação cultural através de uma plataforma acessível e intuitiva.
          </p>
        </section>
      </div>

      {/*  GRID DE CARDS */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categorias.map((cat) => (
          <Link
            key={cat.rota}
            href={`/${cat.rota}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
          >
            <img src={cat.imagem} alt={cat.nome} className="w-full h-40 object-cover rounded-t-lg" />
         
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#5D3FD3]">{cat.nome}</h2>
              <p className="text-gray-700">{cat.descricao}</p>
            </div>
          </Link>
        ))}
      </main>

      <footer className="mt-16 text-center text-[#4A6B57]">
        © 2025 EduCultura. Todos os direitos reservados.
      </footer>
    </div>
  )
}
