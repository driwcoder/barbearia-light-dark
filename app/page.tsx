'use client'
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Image from 'next/image';
import { useState } from 'react';

const themes = {
  light: {
    background: 'bg-white',
    color: 'text-black',
    image: '/assets/moon.png',
    button: 'bg-black text-white',
  },
  dark: {
    background: 'bg-black',
    color: 'text-white',
    image: '/assets/sun.png',
    button: 'bg-white text-black',
  },
}

export default function Home() {
  // Inicializa o estado com o tema claro
  const [theme, setTheme] = useState(true)

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(!theme)
  }

  const themeStyles = theme ? themes.light : themes.dark
  return (
    <main className={`flex min-h-screen min-w-screen flex-col ${themeStyles.background}`}>
      <Header theme={theme} toggleTheme={toggleTheme} themes={themes} />
        <Image 
          width={1024}
          height={1024}
          alt='um banner'
          src={'/assets/banner-barbearia.jpg'}
          className='w-full h-auto'
        />
      <Welcome theme={theme} toggleTheme={toggleTheme} themes={themes} />
    </main>
  )
}
