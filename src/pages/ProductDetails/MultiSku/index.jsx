import { useState } from 'react'

import { Breadcrumb } from '../../../components/Breadcrumb'
import { Select } from '../../../components/Form/Select'
import { ProductCarousel } from '../ProductCarousel'
import { Button } from '../../../components/Form/Button'
import { Slider } from '../../../components/Slider'

import { ReactComponent as SuccessAlertIcon } from '../../../assets/images/icons/success.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg'
import { ReactComponent as HeartIcon } from '../../../assets/images/icons/heart.svg'
import { ReactComponent as HeartTapIcon } from '../../../assets/images/icons/heart-tap.svg'
import { ReactComponent as ShareIcon } from '../../../assets/images/icons/share.svg'
import { ReactComponent as ShareTapIcon } from '../../../assets/images/icons/share-tap.svg'
import { ReactComponent as FacebookIcon } from '../../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as PinterestIcon } from '../../../assets/images/icons/pinterest.svg'
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/email.svg'

import cafeteiraFullJPG from '../../../assets/images/cafeteira-full.jpg'
import cafeteiraMini1JPG from '../../../assets/images/cafeteira-mini-1.jpg'
import cafeteiraMini2JPG from '../../../assets/images/cafeteira-mini-2.jpg'
import cafeteiraMini3JPG from '../../../assets/images/cafeteira-mini-3.jpg'
import cafeteiraMini4JPG from '../../../assets/images/cafeteira-mini-4.jpg'

import cadeira1 from '../../../assets/images/cadeira-1.jpg'
import cadeira2 from '../../../assets/images/cadeira-2.jpg'
import cadeira3 from '../../../assets/images/cadeira-3.jpg'
import cadeira4 from '../../../assets/images/cadeira-4.jpg'

const productImages = [
	{ id: 1, src: cafeteiraFullJPG, description: 'cadeira 1' },
	{ id: 2, src: cafeteiraMini1JPG, description: 'cadeira 2' },
	{ id: 3, src: cafeteiraMini2JPG, description: 'cadeira 3' },
	{ id: 4, src: cafeteiraMini3JPG, description: 'cadeira 4' },
	{ id: 5, src: cafeteiraMini4JPG, description: 'cadeira 5' },
	{ id: 6, src: cafeteiraMini2JPG, description: 'cadeira 6' },
]

const sliderChairItems = [
	{
		title: 'Cadeira de escrit??rio Diretor Reclin??vel Preta',
		image: cadeira1,
		oldPrice: 'R$ 219,00',
		price: 'R$ 309,90',
	},
	{
		title: 'Cadeira Gamer Prizi Amarela',
		image: cadeira2,
		price: 'R$ 699,90',
	},
	{
		title: 'Cadeira de Escrit??rio com Base Cromada',
		image: cadeira3,
		price: 'R$ 269,10',
	},
	{
		title: 'Cadeira de Escrit??rio Presidente Girat??ria Eames Branca',
		image: cadeira4,
		price: 'R$ 756,71',
	},
]

export function ProductDetailsMultiSku() {
	const [favState, setFavState] = useState(false)
	const [shareState, setShareState] = useState(false)

	function handleFavClick() {
		setFavState((state) => !state)
	}

	function handleShareClick() {
		setShareState((state) => !state)
	}

	function handleClickToggleBox(event) {
		const clickedElement = event.currentTarget
		const content = clickedElement.nextElementSibling

		clickedElement.classList.toggle(
			'l-product-details__information-title--active'
		)
		content.classList.toggle('l-product-details__information-content--active')
	}

	return (
		<>
			<div className="l-product-details container">
				<div className="row">
					<Breadcrumb
						className="my-5"
						list={[
							{ href: '#', link: 'Home' },
							{ href: '#', link: 'Produto' },
						]}
					/>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<ProductCarousel productImages={productImages} />
					</div>
					<div className="col-lg-6 l-product-details__description-container">
						<h3 className="l-product-details__title">
							Cafeteira El??trica Philco PH14 Inox - Preto Fosco e Prata
						</h3>
						<div className="l-product-details__price-container">
							<div className="l-product-details__price-container-for">
								<span className="l-product-details__old-price">de R$ 198,90 </span>
								<span className="l-product-details__for-price">por</span>
							</div>
							<span className="l-product-details__price">R$ 139,90</span>
						</div>

						<span className="l-product-details__line mb-4"></span>

						<Select
							className="l-product-details__select"
							name="voltagem"
							message="Voltagem"
						>
							<option value="">Selecione</option>
							<option value="">127 V</option>
							<option value="">220 V</option>
						</Select>

						<Button className="u-mt-32" color="tertiary" disabled>
							Adicionar ao carrinho
						</Button>
						<span className="l-product-details__stock">
							<SuccessAlertIcon /> Item em estoque
						</span>
						<span className="l-product-details__line"></span>

						<div className="l-product-details__share-container">
							<span>
								{favState ? (
									<button onClick={handleFavClick}>
										<HeartTapIcon /> Adicionar ?? Lista de Favoritos
									</button>
								) : (
									<button onClick={handleFavClick}>
										<HeartIcon /> Adicionar ?? Lista de Favoritos
									</button>
								)}
							</span>
							<span>
								{shareState ? (
									<button onClick={handleShareClick}>
										<ShareTapIcon /> Compartilhar
									</button>
								) : (
									<button onClick={handleShareClick}>
										<ShareIcon /> Compartilhar
									</button>
								)}
								{shareState && (
									<div className="l-product-details__share-container-options">
										<button
											onClick={handleShareClick}
											className="l-product-details__share-container-close"
										>
											<CloseIcon />
										</button>
										<ul className="l-product-details__share-container-list">
											<li>
												<a href="/" className="l-product-details__share-container-item">
													<FacebookIcon className="svg-facebook" /> Facebook
												</a>
											</li>
											<li>
												<a href="/" className="l-product-details__share-container-item">
													<PinterestIcon className="svg-pinterest" /> Pinterest
												</a>
											</li>
											<li>
												<a href="/" className="l-product-details__share-container-item">
													<TwitterIcon className="svg-twitter" /> Twitter
												</a>
											</li>
											<li>
												<a href="/" className="l-product-details__share-container-item">
													<EmailIcon /> Email
												</a>
											</li>
										</ul>
									</div>
								)}
							</span>
						</div>

						<span className="l-product-details__line"></span>

						<div className="l-product-details__information">
							<span
								className="l-product-details__information-title"
								onClick={handleClickToggleBox}
							>
								Detalhes do Produto
							</span>
							<p className="l-product-details__information-content">
								Precisando de uma cadeira confort??vel para o seu ambiente de trabalho?
								Conte com a Cadeira de Escrit??rio Oslo. Ela ?? ideal para proporcionar
								bom gosto para a decora????o, deixando voc?? muito mais ?? vontade para
								realizar as tarefas do dia. Com rod??zios e regulagem de altura, ela
								facilita a sua movimenta????o e se adapta ?? sua necessidade.
							</p>
						</div>

						<div className="l-product-details__information">
							<span
								className="l-product-details__information-title"
								onClick={handleClickToggleBox}
							>
								Especifica????es
							</span>
							<p className="l-product-details__information-content">
								Cor: Preto <br />
								Instru????es/Cuidados: Produto recomendado para uso dom??stico. Limpar com
								pano macio seco ou levemente umedecido com ??gua. <br />
								Conte??do da Embalagem1 Cadeira de Escrit??rio Modelo: Oslo Diretor <br />
								Material: Corino, Pist??o a G??s, Metal Cromado Descri????o do Tamanho:{' '}
								<br />
								Altura : 94-104 cm <br />
								Largura: 61 cm <br />
								Profundidade: 62 cm; Altura do Assento ao Ch??o: 47-57cm; Altura do bra??o
								ao ch??o: 63-73 cm Densidade: 24 <br />
								Tipo do Encosto: Diretor <br />
								Peso suportado (kg)90
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<Slider title="Mais Vendidos no TRX" items={sliderChairItems} />
					</div>
				</div>
			</div>
		</>
	)
}
