import { useState } from 'react'
import { useSideCart } from '../../hooks/useSideCart'

import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductCarousel } from './ProductCarousel'
import { Button } from '../../components/Form/Button'
import { Slider } from '../../components/Slider'

import { ReactComponent as SuccessAlertIcon } from '../../assets/images/icons/success.svg'
import { ReactComponent as HeartIcon } from '../../assets/images/icons/heart.svg'
import { ReactComponent as HeartTapIcon } from '../../assets/images/icons/heart-tap.svg'
import { ReactComponent as ShareIcon } from '../../assets/images/icons/share.svg'
import { ReactComponent as ShareTapIcon } from '../../assets/images/icons/share-tap.svg'
import { ReactComponent as FacebookIcon } from '../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg'
import { ReactComponent as PinterestIcon } from '../../assets/images/icons/pinterest.svg'
import { ReactComponent as EmailIcon } from '../../assets/images/icons/email.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close.svg'

import cadeiraFullJPG from '../../assets/images/cadeira-full.jpg'
import cadeiraMini1JPG from '../../assets/images/cadeira-mini-1.jpg'
import cadeiraMini2JPG from '../../assets/images/cadeira-mini-2.jpg'
import cadeiraMini3JPG from '../../assets/images/cadeira-mini-3.jpg'
import cadeiraMini4JPG from '../../assets/images/cadeira-mini-4.jpg'

import cadeira1 from '../../assets/images/cadeira-1.jpg'
import cadeira2 from '../../assets/images/cadeira-2.jpg'
import cadeira3 from '../../assets/images/cadeira-3.jpg'
import cadeira4 from '../../assets/images/cadeira-4.jpg'

const productImages = [
	{ id: 1, src: cadeiraFullJPG, description: 'cadeira 1' },
	{ id: 2, src: cadeiraMini1JPG, description: 'cadeira 2' },
	{ id: 3, src: cadeiraMini2JPG, description: 'cadeira 3' },
	{ id: 4, src: cadeiraMini3JPG, description: 'cadeira 4' },
	{ id: 5, src: cadeiraMini4JPG, description: 'cadeira 5' },
	{ id: 6, src: cadeiraMini2JPG, description: 'cadeira 6' },
]

const sliderChairItems = [
	{
		title: 'Cadeira de escritório Diretor Reclinável Preta',
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
		title: 'Cadeira de Escritório com Base Cromada',
		image: cadeira3,
		price: 'R$ 269,10',
	},
	{
		title: 'Cadeira de Escritório Presidente Giratória Eames Branca',
		image: cadeira4,
		price: 'R$ 756,71',
	},
]

export function ProductDetails() {
	const [favState, setFavState] = useState(false)
	const [shareState, setShareState] = useState(false)

	const { handleClickToggleSideCart } = useSideCart()

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
							Cadeira de Escritório Diretor Giratória Preta
						</h3>
						<span className="l-product-details__price">R$ 433,79</span>
						<span className="l-product-details__line" />
						<Button
							className="u-mt-32"
							color="tertiary"
							onClick={handleClickToggleSideCart}
						>
							Adicionar ao carrinho
						</Button>
						<span className="l-product-details__stock">
							<SuccessAlertIcon /> Item em estoque
						</span>
						<span className="l-product-details__line" />

						<div className="l-product-details__share-container">
							<span>
								{favState ? (
									<button onClick={handleFavClick}>
										<HeartTapIcon /> Adicionar à Lista de Favoritos
									</button>
								) : (
									<button onClick={handleFavClick}>
										<HeartIcon /> Adicionar à Lista de Favoritos
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

						<span className="l-product-details__line" />

						<div className="l-product-details__information">
							<span
								className="l-product-details__information-title"
								onClick={handleClickToggleBox}
							>
								Detalhes do Produto
							</span>
							<p className="l-product-details__information-content">
								Precisando de uma cadeira confortável para o seu ambiente de trabalho?
								Conte com a Cadeira de Escritório Oslo. Ela é ideal para proporcionar
								bom gosto para a decoração, deixando você muito mais à vontade para
								realizar as tarefas do dia. Com rodízios e regulagem de altura, ela
								facilita a sua movimentação e se adapta à sua necessidade.
							</p>
						</div>

						<div className="l-product-details__information">
							<span
								className="l-product-details__information-title"
								onClick={handleClickToggleBox}
							>
								Especificações
							</span>
							<p className="l-product-details__information-content">
								Cor: Preto <br />
								Instruções/Cuidados: Produto recomendado para uso doméstico. Limpar com
								pano macio seco ou levemente umedecido com água. <br />
								Conteúdo da Embalagem1 Cadeira de Escritório Modelo: Oslo Diretor <br />
								Material: Corino, Pistão a Gás, Metal Cromado Descrição do Tamanho:{' '}
								<br />
								Altura : 94-104 cm <br />
								Largura: 61 cm <br />
								Profundidade: 62 cm Altura do Assento ao Chão: 47-57cm Altura do braço
								ao chão: 63-73 cm Densidade: 24 <br />
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
