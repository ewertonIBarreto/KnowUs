import './details.css'
import devs from './../../database/devs.json'
import { Routes, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from './../../services/api'

 const Details = () => {

	let { id } = useParams()
	let devGeted = devs.filter(dev => dev.id == id)[0]

	const [location, setLocation] = useState()

	console.log(devs)
	console.log(devGeted)

	useEffect(() => {

		api.get(`${devGeted.cep}/json`).then(

			response => {

				let localizacao = response.data

				setLocation(`${localizacao.localidade}, ${localizacao.uf}`)

			}

		)


	}, [])

	return (

		<>

			<header className="details">



			</header>

			<div className="container">

				<aside>

					<img src={devGeted.avatar} className='profile-image' />

					<section className='user-info'>
						<div>
							<img src='https://img.icons8.com/material/344/ffffff/marker--v1.png' />
							<span>{ location }</span>
						</div>
						<div>
							<img src='https://img.icons8.com/material/344/ffffff/new-job--v1.png' />
							<span>Tesla</span>
						</div>
						<div>
							<img src='https://img.icons8.com/material/344/ffffff/github.png' />
							<span>{ devGeted.name }</span>
						</div>
					</section>

					<section className='user-tags'>

						{

							devGeted.skills.map(

								skill => <span className='tag front-end'>{ skill }</span>

							)

						}

					</section>

				</aside>

				<main>

					<h1>{ devGeted.name }, { devGeted.age }</h1>

					<section className='tabs'>

						<span className='active'>Hobies</span>
						<span>Experiências</span>
						<span>Formações</span>

					</section>

					<section className='user-informations hobbies-container'>

						<h1 className='information-title'>Hobbies</h1>

						<ul className='hobbies'>

							<li className='hobbie'>

								<span className='icon-wrapper'>
									<img src='https://img.icons8.com/material-outlined/344/ffffff/controller.png' />
								</span>
								<h1>Gaming</h1>

							</li>

							<li className='hobbie'>

								<span className='icon-wrapper'>
									<img src='https://img.icons8.com/material-outlined/344/ffffff/controller.png' />
								</span>
								<h1>Gaming</h1>

							</li>

							<li className='hobbie'>

								<span className='icon-wrapper'>
									<img src='https://img.icons8.com/material-outlined/344/ffffff/controller.png' />
								</span>
								<h1>Gaming</h1>

							</li>

						</ul>

					</section>

					<section className='user-informations experiences-container'>

						<h1 className='information-title'>Experiências</h1>

						<ul className='horizontal-list'>

							{devGeted.jobs.map((job, map) => {

								return (

									<li>

										<section className='item-info'>

											<span className='icon-wrapper'>
												<img src='https://img.icons8.com/material-outlined/344/ffffff/parse-from-clipboard.png' />
											</span>

											<div>

												<h1>{ job.companyName }</h1>
												<h2>{ job.position }</h2>

											</div>

										</section>

										<div className='time-info'>

											<h1>{ job.type }</h1>
											<h2>{ job.endDate == null ? 'Atual' : job.endDate }</h2>

										</div>

									</li>

								)

							})}

						</ul>

					</section>

					<section className='user-informations formations-container'>

						<h1 className='information-title'>Formações</h1>

						<ul className='horizontal-list'>

							{devGeted.studies.map((study, map) => {

								return (

									<li>

										<section className='item-info'>

											<span className='icon-wrapper'>
												<img src='https://img.icons8.com/material-outlined/344/ffffff/motarboard.png' />
											</span>

											<div>

												<h1>{ study.companyName }</h1>
												<h2>{ study.subject }</h2>

											</div>

										</section>

										<div className='time-info'>

											<h1>Finished</h1>
											<h2>2 years</h2>

										</div>

									</li>

								)

							})}

						</ul>

					</section>

				</main>

			</div>

		</>

	)
}

export default Details