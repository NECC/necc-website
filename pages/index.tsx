import TeamGrid from '../components/home/TeamGrid'
import SponsorCard from '../components/home/SponsorCard'
import sponsorsData from '../data/sponsors.json'
import Layout from '../components/Layout'


export default function Home() {
  const sponsors = sponsorsData.sponsors;

  return (
    <Layout>
      <main id="app">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ease-in-out bg-fixed bg-center bg-cover bg-no-repeat px-4 bg-necc">
          <h1 className="text-white font-semibold text-6xl md:text-9xl mb-4 font-Allerta">
            NECC
          </h1>
          <p className="text-white font-semibold uppercase text-lg md:text-xl">núcleo de estudantes de ciências da computação</p>
        </section>

        <section id="about-me" className="bg-gray-100 dark:bg-gray-700 py-32 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center justify-center p-5">
            <header className="mb-4">
              <h2 className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                O que é o NECC?
              </h2>
            </header>
            <p className="lg:w-6/12 text-justify text-gray-800 dark:text-gray-100 leading-relaxed">
              A Licenciatura em Ciências da Computação (anteriormente LMCC) é uma parceria do Departamento de
              Matemática (da Escola de Ciências) e do Departamento de Informática (da Escola de Engenharia) e
              caracteriza-se por uma visão rigorosa da computação, com uma sólida fundamentação matemática. O NECC
              é uma associação de estudantes, voluntários, foi criada a 30 de março de 2009 (anteriormente GEMCC) com o intuito
              de ajudar e representar todos os alunos do curso de Licenciatura de Ciências da Computação da
              Universidade do Minho. Ao longo de vários anos, aconselhamos os alunos de todos os anos, seja na
              apresentação no primeiro ano, realização de workshops e contactos com empresas a alunos finalistas.
            </p>
          </article>
        </section>

        <section id="team" className="bg-blue-50 dark:bg-gray-800 py-28 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center justify-center p-5">
            <header className="mb-16">
              <h2
                className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                A nossa equipa</h2>
            </header>
            <TeamGrid />
          </article>
        </section>

        <section id="partners" className="bg-gray-100 dark:bg-gray-700 py-28 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center p-5">
            <header className="mb-16">
              <h2
                className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                Os nossos parceiros</h2>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {
                sponsors.map((sponsor, index) => {
                  return <SponsorCard {...sponsor} key={index} />;
                })
              }
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}
