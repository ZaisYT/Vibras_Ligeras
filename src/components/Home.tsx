import { useEffect } from 'react';
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
					<h3 className='Handler'>

					</h3>
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



