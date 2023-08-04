import { useState } from 'react'
import { BsGithub, BsMoon, BsSun, BsTelegram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import FinanceAccounting from '../public/finance-accounting.svg'
import PathFinding from '../public/path-finding.svg'
import PortfolioPhoto from '../public/portfolio-photo.jpg'
import ResumePdf from '../public/resume.pdf'
import SmartPoselok from '../public/smart-poselok.svg'
import Soon from '../public/soon.svg'

import './App.css'

type ThemeType = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <div className={theme === 'dark' ? 'dark' : 'light'} >
    <div className='bg-white p-10 lg:px-20 dark:bg-gray-700'>

      <section className='min-h-screen flex flex-col'>
        <header className='pb-8 '>
          <nav className='flex justify-between'>
            <h1 className='text-2xl dark:text-white'>Resume </h1>
            <ul className='flex items-center'>
              <li onClick={toggleTheme} className='flex'>
                {
                  theme === 'light' ? <BsSun className='cursor-pointer text-2xl' /> :
                    <BsMoon className='text-white cursor-pointer text-2xl' />
                }
              </li>
              <li>
                <a href={ResumePdf} target='_blank' rel='noreferrer' className='text-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded ml-8'>Скачать PDF</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className='flex flex-col items-center justify-center h-full md:flex-row md:mt-12 md:justify-between lg:justify-evenly'>
          <div>
            <div className='text-center px-6'>
              <h2 className='text-4xl text-teal-500 font-medium py-2 md:text-5xl'>Сергей Перфильев</h2>
              <h3 className='text-3xl py-1 md:text-3xl dark:text-white'>Frontend developer</h3>
              <p className='text-xl py-4 leading-8 text-gray-800 md:text-xl max-w-md mx-auto dark:text-white'>Мне нравится создавать надежные и масштабируемые продукты с отличным пользовательским интерфейсом.</p>
            </div>
          </div>
          <div className='p-10 pb-4 mt-4 bg-teal-200 rounded-3xl'>
            <div className='relative rounded-full w-60 aspect-square mx-auto overflow-hidden border-4 border-white md:w-72 dark:text-white'>
              <img src={PortfolioPhoto} alt="resume-photo" className='w-10/12 aspect-square absolute top-1/2 left-1/2 transform -translate-x-20 -translate-y-2/4 md:-translate-x-24' />
            </div>
            <div className='bg-teal-400 rounded-full px-4 py-2 my-6 mb-4 text-4xl flex gap-10 text-gray-800 bottom-0 right-0 left-0 md:text-5xl'>
              <a href="https://github.com/Sergey-Perfiliev" target='_blank' className='p-2 bg-white rounded-full'><BsGithub className='text-black' /></a>
              <a href="https://t.me/serge0025" target='_blank' className='p-2 bg-white rounded-full'><BsTelegram className='text-blue-400' /></a>
              <a href={`mailto:sergeyperfiliev002@gmail.com?subject="subject text"`} target='_blank' className='p-2 bg-white rounded-full'><SiGmail className='p-1 text-red-400' /></a>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div>
          <h3 className='text-4xl py-1 dark:text-white'>Portfolio</h3>
        </div>
        <div className='lg:grid lg:grid-cols-2 gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-green-300 lg:my-0'>
            <div className='flex flex-row items-center justify-center mb-4'>
              <img src={SmartPoselok} className='bg-white rounded-full p-6 aspect-square overflow-visible w-32 object-cover mr-4' />
              <h3 className='text-gray-700 text-2xl font-medium pb-2'>Smart Poselok</h3>
            </div>
            <div>
              <p className='text-gray-700 text-lg py-2'>Комплекс ПО для жильцов, администраторов и застройщиков СНТ, разработанный с целью упростить жизнь всем добросовестным участникам системы.</p>
              <h4 className='font-medium text-gray-700 text-lg'>Реализован с помощью:</h4>
              <p className='text-gray-700'>React JS, Redux, Sass, Figma</p>
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-red-100 lg:my-0'>
            <div className='flex flex-row items-center justify-center mb-4'>
              <img src={PathFinding} className='bg-white rounded-full p-10 aspect-square overflow-visible w-32 object-cover mr-4' />
              <h3 className='text-gray-700 text-2xl font-medium pb-2'>Path finding</h3>
            </div>
            <div>
              <p className='text-gray-700 text-lg py-2'>Комплекс ПО для жильцов, администраторов и застройщиков СНТ, разработанный с целью упростить жизнь всем добросовестным участникам системы.</p>
              <h4 className='font-medium text-gray-700 text-lg'>Реализован с помощью:</h4>
              <p className='text-gray-700'>Svelte, Typescript</p>
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-blue-100 lg:my-0'>
            <div className='flex flex-row items-center justify-center mb-4'>
              <img src={FinanceAccounting} className='bg-white rounded-full p-10 aspect-square overflow-visible w-32 object-cover mr-4' />
              <h3 className='text-gray-700 text-2xl font-medium pb-2'>Finance accounting</h3>
            </div>
            <div>
              <p className='text-gray-700 text-lg py-2'>Web-приложение для того, чтобы сделать управление капиталом доступным и простым для каждого. Отслеживайте свои расходы, чтобы улучшить свое финансовое положение. Составьте реалистичный месячный бюджет. Увеличивайте свои сбережения, даже если на это потребуется время. </p>
              <h4 className='font-medium text-gray-700 text-lg'>Рарзрабатывается с помощью:</h4>
              <p className='text-gray-700'>React, ReduxToolkit, Typescript</p>
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-gray-100 lg:my-0'>
            <div className='flex flex-row items-center justify-center mb-4'>
              <img src={Soon} className='bg-white rounded-full p-10 aspect-square overflow-visible w-32 object-cover mr-4' />
              <h3 className='text-gray-700 text-2xl font-medium pb-2'>Soon</h3>
            </div>
            {/* <div>
              <p className='text-gray-700 text-lg py-2'>In progress</p>
              <h4 className='font-medium text-gray-700 text-lg'>Рарзрабатывается с помощью:</h4>
              <p className='text-gray-700'>Unknown</p>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  </div >
}

export default App
