import { NewsLetter } from '../../components/Newsletter'
import { DoubleBanner } from '../../components/DoubleBanner'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Banner } from '../../components/Banner'
import { Slider } from '../../components/Slider'

import banner1JPG from '../../assets/images/banner-1.jpg'
import banner2JPG from '../../assets/images/banner-2.jpg'
import banner1MobileJPG from '../../assets/images/banner-1-mobile.jpg'
import banner2MobileJPG from '../../assets/images/banner-2-mobile.jpg'
import banner3JPG from '../../assets/images/banner-3.jpg'
import banner3MobileJPG from '../../assets/images/banner-3-mobile.jpg'
import banner4JPG from '../../assets/images/banner-4.jpg'
import banner4MobileJPG from '../../assets/images/banner-4-mobile.jpg'

import promotion1 from '../../assets/images/promotion-1.jpg'
import promotion2 from '../../assets/images/promotion-2.jpg'
import promotion3 from '../../assets/images/promotion-3.jpg'


import prd1 from '../../assets/images/prd-1.jpg'
import prd2 from '../../assets/images/prd-2.jpg'
import prd3 from '../../assets/images/prd-3.jpg'
import prd4 from '../../assets/images/prd-4.jpg'
import prd5 from '../../assets/images/prd-5.jpg'
import prd6 from '../../assets/images/prd-6.jpg'

import product1 from '../../assets/images/product-1.jpg'
import product2 from '../../assets/images/product-2.jpg'
import product3 from '../../assets/images/product-3.jpg'
import product4 from '../../assets/images/product-4.jpg'

const imageBanner_1 = {
  alt: "banner 1",
  url: '/',
  images: [
    {
      src: banner1JPG,
      media: '(min-width:650px)',
    },
    {
      src: banner1MobileJPG,
      media: '(min-width:0)',
    }
  ]
}

const imageBanner_2 = {
  alt: "banner 1",
  url: '/',
  images: [
    {
      src: banner2JPG,
      media: '(min-width:650px)',
    },
    {
      src: banner2MobileJPG,
      media: '(min-width:0)',
    }
  ]
}

const sliderCategories = [
  {
    title: 'Cafeteira',
    image: prd1,
  },
  {
    title: 'Escrivaninha',
    image: prd2
  },
  {
    title: 'Cadeira',
    image: prd3
  },
  {
    title: 'CaInformática',
    image: prd4
  },
  {
    title: 'Pantufa',
    image: prd5
  },
  {
    title: 'Moletom',
    image: prd6
  }
]

const bannersConfig = [
  {
    id: 0,
    alt: "banner 1",
    url: '/',
    images: [
      {
        src: banner3JPG,
        media: '(min-width:650px)',
      },
      {
        src: banner3MobileJPG,
        media: '(min-width:0)',
      }
    ]
  },
  {
    id: 1,
    alt: "banner 2",
    url: '/',
    images: [
      {
        src: banner4JPG,
        media: '(min-width:650px)',
      },
      {
        src: banner4MobileJPG,
        media: '(min-width:0)',
      }
    ]
  }
]

const sliderProductItems = [
  {
    title: 'Escrivaninha Office Branco',
    image: product1,
    oldPrice: 'R$ 219,00',
    price: 'R$ 197,10'
  },
  {
    title: 'Cafeteira Expresso Nescafé Dolce Gusto Genio S Plus DGS2 Arno Preto',
    image: product2,
    price: 'R$ 499,99'
  },
  {
    title: 'Notebook Lenovo Core i5-1035G1 8GB 1TB Tela 15.6” Windows 10 Ideapad S145',
    image: product3,
    price: 'R$ 3.609,05'
  },
  {
    title: 'Cafeteira Single Contrast Cadence',
    image: product4,
    price: 'R$ 84,90'
  }
]

export function Department() {
  return (
    <>
      <div className="l-department container">
        <div className="row">
          <Breadcrumb className="my-5" list={[
            { href: "#", link: "Home" },
            { href: "#", link: "Home Office" }
          ]} />
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="l-department__title">Home Office</h1>
            <div className="l-department__line"></div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <Banner config={imageBanner_2} />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <Slider category title="Navegue por Categoria" items={sliderCategories} />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <DoubleBanner config={bannersConfig} />
          </div>
        </div>
      </div>

      <div className="container u-mt-80">
        <div className="row">
          <div className="col-12">
            <Slider title="Mais visitados em Home Office" items={sliderProductItems} />
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
            <Slider title="Mais comprados em Home Office" items={sliderProductItems} />
          </div>
        </div>
      </div>

      <div className="container u-mt-80">
        <div className="row">
          <div className="col-12">
            <Slider title="Novidades" items={sliderProductItems} />
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

      <div className="container u-mt-80 u-mb-80">
        <div className="row">
          <div className="col-12">
            <Slider title="Destaques" items={sliderProductItems} />
          </div>
        </div>
      </div>

      <NewsLetter />
    </>
  )
}