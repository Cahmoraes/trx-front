import { NewsLetter } from '../../components/Newsletter'
import { Hero } from '../../components/Hero'
import { Slider } from '../../components/Slider'
import { Banner } from '../../components/Banner'
import { DoubleBanner } from '../../components/DoubleBanner'

import product1 from '../../assets/images/product-1.jpg'
import product2 from '../../assets/images/product-2.jpg'
import product3 from '../../assets/images/product-3.jpg'
import product4 from '../../assets/images/product-4.jpg'

import cadeira1 from '../../assets/images/cadeira-1.jpg'
import cadeira2 from '../../assets/images/cadeira-2.jpg'
import cadeira3 from '../../assets/images/cadeira-3.jpg'
import cadeira4 from '../../assets/images/cadeira-4.jpg'

import prd1 from '../../assets/images/prd-1.jpg'
import prd2 from '../../assets/images/prd-2.jpg'
import prd3 from '../../assets/images/prd-3.jpg'
import prd4 from '../../assets/images/prd-4.jpg'
import prd5 from '../../assets/images/prd-5.jpg'
import prd6 from '../../assets/images/prd-6.jpg'

import promotion1 from '../../assets/images/promotion-1.jpg'
import promotion2 from '../../assets/images/promotion-2.jpg'
import promotion3 from '../../assets/images/promotion-3.jpg'

import banner1JPG from '../../assets/images/banner-1.jpg'
import banner2JPG from '../../assets/images/banner-2.jpg'
import banner1MobileJPG from '../../assets/images/banner-1-mobile.jpg'
import banner2MobileJPG from '../../assets/images/banner-2-mobile.jpg'

import novidade1JPG from '../../assets/images/novidade-1.jpg'
import novidade2JPG from '../../assets/images/novidade-2.jpg'
import novidade3JPG from '../../assets/images/novidade-3.jpg'
import novidade4JPG from '../../assets/images/novidade-4.jpg'

import banner3JPG from '../../assets/images/banner-3.jpg'
import banner3MobileJPG from '../../assets/images/banner-3-mobile.jpg'
import banner4JPG from '../../assets/images/banner-4.jpg'
import banner4MobileJPG from '../../assets/images/banner-4-mobile.jpg'

const bannersConfig = [
	{
		id: 0,
		alt: 'banner 1',
		url: '/',
		images: [
			{
				src: banner3JPG,
				media: '(min-width:650px)',
			},
			{
				src: banner3MobileJPG,
				media: '(min-width:0)',
			},
		],
	},
	{
		id: 1,
		alt: 'banner 2',
		url: '/',
		images: [
			{
				src: banner4JPG,
				media: '(min-width:650px)',
			},
			{
				src: banner4MobileJPG,
				media: '(min-width:0)',
			},
		],
	},
]

const imageBanner_1 = {
	alt: 'banner 1',
	url: '/',
	images: [
		{
			src: banner1JPG,
			media: '(min-width:650px)',
		},
		{
			src: banner1MobileJPG,
			media: '(min-width:0)',
		},
	],
}

const imageBanner_2 = {
	alt: 'banner 1',
	url: '/',
	images: [
		{
			src: banner2JPG,
			media: '(min-width:650px)',
		},
		{
			src: banner2MobileJPG,
			media: '(min-width:0)',
		},
	],
}

const sliderCategories = [
	{
		title: 'Cafeteira',
		image: prd1,
	},
	{
		title: 'Escrivaninha',
		image: prd2,
	},
	{
		title: 'Cadeira',
		image: prd3,
	},
	{
		title: 'CaInformática',
		image: prd4,
	},
	{
		title: 'Pantufa',
		image: prd5,
	},
	{
		title: 'Moletom',
		image: prd6,
	},
]

const sliderProductItems = [
	{
		title: 'Escrivaninha Office Branco',
		image: product1,
		oldPrice: 'R$ 219,00',
		price: 'R$ 197,10',
	},
	{
		title: 'Cafeteira Expresso Nescafé Dolce Gusto Genio S Plus DGS2 Arno Preto',
		image: product2,
		price: 'R$ 499,99',
	},
	{
		title:
			'Notebook Lenovo Core i5-1035G1 8GB 1TB Tela 15.6” Windows 10 Ideapad S145',
		image: product3,
		price: 'R$ 3.609,05',
	},
	{
		title: 'Cafeteira Single Contrast Cadence',
		image: product4,
		price: 'R$ 84,90',
	},
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

const sliderNewsItems = [
	{
		title: 'Positivo Twist Tabkids Preto Vem Com Capa Emborrachada',
		image: novidade1JPG,
		price: 'R$ 349,00',
	},
	{
		title: 'iPad Magic Keyboard 12.9" - BRA',
		image: novidade2JPG,
		price: 'R$ 2.999,99',
	},
	{
		title: 'Tablet Multilaser M7s Go Wi-fi 16gb 1gb Quad Core Nb316',
		image: novidade3JPG,
		price: 'R$ 357,99',
	},
	{
		title:
			'Tablet Samsung T505 A7 64GB, 3GB RAM, Tela de 10.4", Câmera Traseira 8MP, Câmer...',
		image: novidade4JPG,
		price: 'R$ 1.499,00',
	},
]

export function Home() {
	return (
		<>
			<div className="container-fluid">
				<div className="row mt-1">
					<Hero />
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Slider category title="Navegue por Categoria" items={sliderCategories} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Slider title="Destaques no TRX" items={sliderProductItems} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-md-4 my-1">
						<a href="/">
							<img className="u-centralize" src={promotion1} alt="Promoção 1" />
						</a>
					</div>
					<div className="col-md-4 my-1">
						<a href="/">
							<img className="u-centralize" src={promotion2} alt="Promoção 2" />
						</a>
					</div>
					<div className="col-md-4 my-1">
						<a href="/">
							<img className="u-centralize" src={promotion3} alt="Promoção 3" />
						</a>
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Banner config={imageBanner_1} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Slider title="Mais Vendidos no TRX" items={sliderChairItems} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Banner config={imageBanner_2} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<Slider title="Novidades pra você" items={sliderNewsItems} />
					</div>
				</div>
			</div>

			<div className="container u-mt-80">
				<div className="row">
					<div className="col-12">
						<DoubleBanner config={bannersConfig} />
					</div>
				</div>
			</div>

			<NewsLetter />
		</>
	)
}
