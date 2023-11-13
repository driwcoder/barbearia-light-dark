
interface WelcomeProps {
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

const Welcome: React.FC<WelcomeProps> = ({ theme, toggleTheme, themes }) => {
  const themeStyles = theme ? themes.light : themes.dark

  return (
    <section className={`${themeStyles.background} ${themeStyles.color} flex flex-col w-full justify-between mx-auto items-center p-20 gap-5`}>
      <h1 className='text-4xl font-bold'>Bem-vindo a Barber Shop</h1>
      <p className='font-bold font-'>
        Nossa barbearia sempre oferece profissionais de qualidade e estamos
        prontos para lidar com suas maiores expectativas.
      </p>
      <p className=''>
        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
        equipe premiada que demonstrou o talento de mestres barbeiros em vários
        concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e
        você nunca ficará desapontado.
      </p >
      <p className='font-Poppins font-bold text-4xl'>S. Kelly</p>
    </section>
  )
}

export default Welcome
