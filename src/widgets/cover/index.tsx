export function Cover() {
	return (
		<div className="relative my-8 h-auto min-h-[32rem] w-full overflow-hidden rounded-2xl backdrop-blur-sm">
			<div className="p-8 md:p-12 lg:p-16">
				<div className="max-w-3xl">
					<div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-indigo-700">
						Whiteshard
					</div>

					<h2 className="mt-4 bg-gradient-to-r from-indigo-900 to-indigo-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent md:text-5xl">
						Мы проектируем ваш онлайн успех!
					</h2>

					<p className="mt-6 text-lg leading-relaxed text-gray-700">
						Мы создаем современные и эффективные сайты с индивидуальным подходом
						и без ограничений шаблонами. Все необходимые услуги включены в
						стоимость: анализ конкурентов, UX-дизайн, SEO-оптимизация,
						адаптивность и удобная админ-панель.
					</p>

					<ul className="mt-8 space-y-4 text-gray-700">
						{[
							"Прорабатываем структуру для высокой конверсии",
							"Оптимизируем скорость работы",
							"3 месяца бесплатной поддержки после запуска!"
						].map((item) => (
							<li key={item} className="flex items-center">
								<svg
									className="mr-3 h-5 w-5 text-indigo-500"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								{item}
							</li>
						))}
					</ul>

					<div className="mt-10">
						<button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/25">
							<span className="relative z-10">Начать проект</span>
							<div className="absolute inset-0 -z-0 translate-y-full bg-indigo-500 transition-transform duration-300 group-hover:translate-y-0" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
