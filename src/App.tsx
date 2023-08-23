import { useState } from 'react'
import { BsGithub, BsMoon, BsSun, BsTelegram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import FinanceAccounting from './assets/finance-accounting.svg'
import PathFinding from './assets/path-finding.svg'
import { ReactComponent as PhotoSvg } from './assets/photo-svg.svg'
import PortfolioPhoto from './assets/portfolio-photo.jpg'
import ResumePdf from './assets/resume.pdf'
import SmartPoselok from './assets/smart-poselok.svg'

import './App.css'

type ThemeType = 'dark' | 'light'

function App() {
	const [theme, setTheme] = useState<ThemeType>('dark')

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className={theme === 'dark' ? 'dark' : 'light'}>
			<div className='overflow-hidden'>
				<section className='min-h-[80vh] flex flex-col bg-teal-100 dark:bg-gray-700'>
					<div className='p-[2rem] lg:px-28'>
						<header className='pb-8'>
							<nav className='flex justify-between'>
								<h1 className='select-none text-3xl dark:text-white linear-wipe xl:text-4xl'>
									Resume
								</h1>
								<ul className='flex items-center'>
									<li onClick={toggleTheme} className='flex'>
										{theme === 'light' ? (
											<BsSun className='cursor-pointer text-2xl' />
										) : (
											<BsMoon className='text-white cursor-pointer text-2xl' />
										)}
									</li>
									<li>
										<a
											href={ResumePdf}
											target='_blank'
											rel='noreferrer'
											className='select-none text-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded ml-8'>
											Скачать PDF
										</a>
									</li>
								</ul>
							</nav>
						</header>
						<div className='flex flex-col items-center justify-center h-full mt-8 md:flex-row md:mt-12 md:justify-between lg:justify-evenly'>
							<div>
								<div className='text-center md:px-6 relative z-10'>
									<h2 className='selection-text text-4xl text-teal-500 font-medium md:text-5xl md: py-2'>
										Перфильев Сергей
									</h2>
									<h3 className='selection-text text-3xl py-1 md:text-3xl dark:text-white'>
										Frontend разработчик
									</h3>
									<p className='selection-text text-xl py-4 leading-8 text-gray-800 md:text-xl max-w-md mx-auto dark:text-white'>
										Мне нравится создавать надежные и масштабируемые продукты с
										отличным пользовательским интерфейсом.
									</p>
								</div>
							</div>
							<div className='relative'>
								<div className='relative p-10 pb-4 mt-4 bg-teal-200 rounded-3xl z-10'>
									<div className='relative rounded-full w-60 aspect-square mx-auto overflow-hidden border-4 border-white md:w-72 dark:text-white'>
										<img
											src={PortfolioPhoto}
											alt='resume-photo'
											className='select-none w-10/12 aspect-square absolute top-1/2 left-1/2 transform -translate-x-20 -translate-y-2/4 md:-translate-x-24'
										/>
									</div>
									<div className='bg-teal-400 rounded-full px-2 py-2 my-6 mb-4 text-4xl flex gap-10 text-gray-800 bottom-0 right-0 left-0 md:text-5xl'>
										<a
											href='https://github.com/Sergey-Perfiliev'
											target='_blank'
											className='p-2 bg-white rounded-full'>
											<BsGithub className='text-black' />
										</a>
										<a
											href='https://t.me/serge0025'
											target='_blank'
											className='p-2 bg-white rounded-full'>
											<BsTelegram className='text-blue-400' />
										</a>
										<a
											href={`mailto:sergeyperfiliev002@gmail.com?subject="subject text"`}
											target='_blank'
											className='p-2 bg-white rounded-full'>
											<SiGmail className='p-1 text-red-400' />
										</a>
									</div>
								</div>
								<PhotoSvg className='hidden lg:block select-none fill-teal-400 absolute right-[-155px] top-[-80px] z-0' />
							</div>
						</div>
					</div>
				</section>

				<main className='dark:bg-slate-600'>
					<div className='p-[2rem] lg:px-28'>
						<div>
							<h3 className='selection-text text-4xl py-1 dark:text-white lg:mb-8'>
								Portfolio
							</h3>
						</div>
						<div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-20 xl:grid-cols-3 xl:gap-15 2xl:gap-20'>
							<div className='text-center shadow-lg p-10 rounded-xl my-10 bg-green-300 lg:my-0'>
								<div className='flex flex-row items-center justify-center mb-4'>
									<img
										src={SmartPoselok}
										className='select-none bg-white rounded-full p-4 md:p-6 aspect-square overflow-visible w-24 md:w-32 object-cover mr-4'
									/>
									<div>
										<h3 className='selection-text-light text-gray-700 text-2xl font-medium pb-2'>
											Smart Poselok
										</h3>
										<button className='w-full max-w-[12rem] shrink-0 py-1 rounded-md bg-slate-100'>
											View
										</button>
									</div>
								</div>
								<div>
									<p className='selection-text-light text-gray-700 text-lg py-2'>
										Комплекс ПО для жильцов, администраторов и застройщиков СНТ,
										разработанный с целью упростить жизнь всем добросовестным
										участникам системы.
									</p>
									<h4 className='selection-text-light font-medium text-gray-700 text-lg'>
										Реализован с помощью:
									</h4>
									<p className='selection-text-light text-gray-700'>
										React JS, Redux, Sass, Figma
									</p>
								</div>
							</div>
							<div className='text-center shadow-lg p-10 rounded-xl my-10 bg-red-100 lg:my-0'>
								<div className='flex flex-row items-center justify-center mb-4'>
									<img
										src={PathFinding}
										className='select-none bg-white rounded-full p-8 md:p-10 aspect-square overflow-visible w-24 md:w-32 object-cover mr-4'
									/>
									<div>
										<h3 className='selection-text-light text-gray-700 text-2xl font-medium pb-2'>
											Path finding
										</h3>
										<button className='w-full max-w-[12rem] shrink-0 py-1 rounded-md bg-slate-100'>
											View
										</button>
									</div>
								</div>
								<div>
									<p className='selection-text-light text-gray-700 text-lg py-2'>
										Web-приложение для поиска пути между двумя заданными
										точками. Возможность выбора алгоритма поиска, огорождения
										пути.
									</p>
									<h4 className='selection-text-light font-medium text-gray-700 text-lg'>
										Реализован с помощью:
									</h4>
									<p className='selection-text-light text-gray-700'>
										Svelte, Typescript
									</p>
								</div>
							</div>
							<div className='text-center shadow-lg p-10 rounded-xl my-10 bg-blue-100 lg:my-0'>
								<div className='flex flex-row items-center justify-center mb-4'>
									<img
										src={FinanceAccounting}
										className='select-none bg-white rounded-full p-8 md:p-12 aspect-square overflow-visible w-24 md:w-32 object-cover mr-4'
									/>
									<div>
										<h3 className='selection-text-light text-gray-700 text-2xl font-medium pb-2'>
											Finance accounting
										</h3>
										<button className='w-full max-w-[12rem] shrink-0 py-1 rounded-md bg-slate-100'>
											View
										</button>
									</div>
								</div>
								<div>
									<p className='selection-text-light text-gray-700 text-lg py-2'>
										Web-приложение для того, чтобы сделать управление капиталом
										доступным и простым для каждого. Отслеживайте свои расходы,
										чтобы улучшить свое финансовое положение.
									</p>
									<h4 className='selection-text-light font-medium text-gray-700 text-lg'>
										Рарзрабатывается с помощью:
									</h4>
									<p className='selection-text-light text-gray-700'>
										React, ReduxToolkit, Typescript
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
