import Image from 'next/image';
import Link from 'next/link';


// Este é o componente que conterá sua logo e outros elementos do cabeçalho
export default function Header() {
  return (
    <header className="flex items-center justify-between mb-12  w-full py-1 px-6 items-center h-12 ">
      {/* Container para suas logos */}
      <div className="flex items-center gap-4">
        {/* Logo para o Modo Claro */}
        <Image
          src="/img/logo EduCultura.png" // Caminho para sua logo com fundo claro/transparente
          alt="logo EduCultura"
          width={160} // Ajuste conforme o tamanho desejado, tamanho horizontal.
          height={20} // Ajuste conforme o tamanho desejado, tamanho vertical.
          className="max-w-full h-auto"
          priority // Opcional, para carregar mais rápido se for a logo principal
        />

        <h1 className="text-3xl font-semibold text-[#5D3FD3]">EduCultura</h1>
      </div>

      {/* Você pode adicionar outros elementos do cabeçalho aqui, como links de navegação, botões, etc. */}
      <nav>
        <ul className="flex gap-8 text-[#5D3FD3] font-medium mx-4">
            <li><Link href="/" target="_blank">Início</Link></li>
            <li><Link href="/Universidades" target="_blank">Universidades</Link></li>
            <li><Link href="/Universidades" target="_blank">Museus</Link></li>
            <li><Link href="/Universidades" target="_blank">Personalidades</Link></li>
            <li><Link href="/Universidades" target="_blank">Eventos</Link></li>
          </ul>
      </nav>
    </header>
  );
}


