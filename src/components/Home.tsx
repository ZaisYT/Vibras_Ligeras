import { useEffect, useState } from 'react';
import '../css/Home.css';
import VLLOGO from '../images/vl-crop.png';

export const Home = () => {

	useEffect(() => {
		document.querySelector('.Sections')?.addEventListener('scroll', () => {
			const trigger = window.innerHeight / 100;
			const scrollY = document.querySelector('.Sections')?.scrollTop;

			if (scrollY === undefined) return;
			if (scrollY >= trigger) {
				document.querySelector('.Indicator')?.classList.remove('Animated');
				document.querySelector('.vllogo')?.classList.add('Hidden');
			} else {
				document.querySelector('.Indicator')?.classList.add('Animated');
				document.querySelector('.vllogo')?.classList.remove('Hidden');
			}
		});
	}, []);

	return (
		<div className="Sections">
			<div className='Main Section'>
				<img src={VLLOGO} alt="" className='vllogo' />

				<div className='Indicator Animated'>
					<p className='Label'>Desliza para continuar</p>
					<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343">
						<path d="M286.67-224.67 240-271.33l240-240 240 240-46.67 46.66-193.33-193-193.33 193Zm0-248.66L240-520l240-240 240 240-46.67 46.67-193.33-193-193.33 193Z" />
					</svg>
				</div>
			</div>

			<div className="About Section">
				<div>
					<h1 className='Title'>Sobre Nosotros</h1>
					<h3 className='Description'>Vibras Ligeras es una banda chilena fundada a finales del 2023, la idea de la banda es hacer canciones de rock (ya sean originales o covers) las cuales puedan ser agradables para todo tipo de personas.</h3>
				</div>
			</div>

			<div className="Integrantes Section">
				<div>
					<h1 className='Title'>Integrantes</h1>
					<div className='Handler'>
						<Card name='Matias Guerrero (Yuu)' role='Baterista' bio='Solo alguien cool B) (No especificada)'/>
						<Card name='Vicente Moreno (Zais)' role='Guitarrista Lider' bio='Vicente Moreno, nacio el 18 de marzo del 2008 (16 años), le gusta el rock, pop y el trap, en el 2023 aprendio a tocar la guitarra, y aunque no fue su primer instrumento, la guitarra fue uno de sus favoritos, hasta el momento cuenta con conocimientos de teoria musical y le gusta producir sus propias canciones de vez en cuando, tambien le gusta programar y jugar juegitos de la compu.'/>
						<Card name='Ariel Mendez (Laitre)' role='Guitarrista Ritmico' bio='Solo alguien cool B) (No especificada)'/>
						<Card name='Sofia Albornoz (Keizin)' role='Vocalista' bio='Solo alguien cool B) (No especificada)'/>
						<Card name='Alonso Carreño (Ascuti)' role='Teclista' bio='Solo alguien cool B) (No especificada)'/>
						<Card name='Gabriel Arias (Pinchpit)' role='Bajista' bio='Solo alguien cool B) (No especificada)'/>
					</div>
				</div>
			</div>

			<div className="What_Means Section">
				<div>
					<h1 className='Title'>¿Que significa vibras ligeras?</h1>
					<h3 className='Description'>El nombre vibras ligeras viene a la emocion que nosotros sentimos al hacer musica, esto debido a que nos tomamos la musica a la ligera, al fin y al cabo es un arte que hacemos por hobbie.</h3>
				</div>
			</div>

			<div className="proyects Section">
				<div>
					<h1 className='Title'>Nuestros Proyectos</h1>
					<h3 className='Description'></h3>
				</div>
			</div>
		</div>
	)
}

type CardContent = {
	name: string;
	role: string;
	bio: string;
}

const Card = ({name, role, bio}: CardContent) => {
	const [open, setOpen] = useState(false);
	const [handle, setHandle] = useState(0);

	function handleOpen() {
		const HandlerSize = document.querySelector('.Handler')?.clientHeight;

		if (HandlerSize === undefined) return;
		setHandle(HandlerSize);

		if (open){
			setHandle(0);
		}

		setOpen(!open);
	}

	return (
		<div className={ open ? 'CardHolder Open' : 'CardHolder'} style={handle > 0 ? {height: `${handle}px`} : undefined} onClick={handleOpen}>
			{open ? <div className='Card' style={handle > 0 ? {height: `${handle}px`} : undefined}>
				<div>
					<h1 className='Name'>{name}</h1>
					<h3 className='Role'>{role}</h3>
				</div>

				<div>
					<h1>BIOGRAFIA:</h1>
					<p>{bio}</p>
				</div>


				<div className='Redes'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-width="2" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
						<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-youtube">
						<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
						<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitch">
						<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
					</svg>
				</div>
			</div> : <div className='Card'>
				<h1 className='Name'>{name}</h1>
				<h3 className='Role'>{role}</h3>
				<div className='Redes'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-width="2" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
						<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-youtube">
						<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
						<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
					</svg>

					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitch">
						<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
					</svg>
				</div>
			</div>
			}
		</div>
	)
}
