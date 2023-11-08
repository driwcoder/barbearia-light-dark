'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import React, { useState } from 'react'

const themes = {
  light: {
    background: 'bg-white',
    color: 'text-black',
    image: '/assets/moon.png',
    button: 'bg-black text-white',
    logo: ''
  },
  dark: {
    background: 'bg-black',
    color: 'text-white',
    image: '/assets/sun.png',
    button: 'bg-white text-black',
    logo: 'rounded-full bg-white'
  },
}

const Header = () => {
  // Inicializa o estado com o tema claro
  const [theme, setTheme] = useState(themes.light)

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  // Estilos do tema atual
  const themeStyles = {
    backgroundColor: theme.background,
    color: theme.color,
  }

  return (
    <div className={`flex w-full justify-between mx-auto items-center ${theme.background} ${theme.color}`}>
      <div
        className={`flex max-w-5xl w-[1024px] justify-between mx-auto items-center`}
      >
        <Image
          src={'/assets/barbearia-logo.png'}
          width={100}
          height={100}
          alt='logo da barbearia'
          className={`${theme.logo}`}
        />
        <Button
          className={`font-bold rounded-3xl flex gap-3 ${theme.button}`}
          onClick={toggleTheme}
        >
          <Image
            src={`${theme.image}`}
            width={25}
            height={25}
            alt='logo da barbearia'
          />
          <span>Dark</span>
        </Button>
      </div>
    </div>
  )
}

export default Header
