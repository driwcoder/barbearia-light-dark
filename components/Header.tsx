import Image from 'next/image'
import { Button } from './ui/button'
import React from 'react'

interface HeaderProps {
  theme: boolean
  toggleTheme: () => void
  themes: {
    light: {
      background: string
      color: string
      image: string
      button: string
    }
    dark: {
      background: string
      color: string
      image: string
      button: string
    }
  }
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, themes }) => {
  const themeStyles = theme ? themes.light : themes.dark

  return (
    <section
      className={`flex w-full justify-between mx-auto items-center px-20 ${themeStyles.background}`}
    >
      <div
        className={`flex max-w-5xl w-[1024px] justify-between mx-auto items-center`}
      >
        <Image
          src={'/assets/barbearia-logo.png'}
          width={100}
          height={100}
          alt='logo da barbearia'
        />
        <Button
          className={`font-bold rounded-3xl flex gap-3 ${themeStyles.button}`}
          onClick={toggleTheme}
        >
          <Image
            src={themeStyles.image}
            width={25}
            height={25}
            alt='logo da barbearia'
          />
          <span>{theme ? 'Dark' : 'Light'}</span>
        </Button>
      </div>
    </section>
  )
}

export default Header
