import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { FilterCategory } from '../../components/FilterCategory'
import { FilterDefault } from '../../components/FilterDefault'
import { Select } from '../../components/Form/Select'
import { Button } from '../../components/Form/Button'
import { ProductBox } from '../../components/ProductBox'

import { ReactComponent as FilterIcon } from '../../assets/images/icons/custom.svg'
import { ReactComponent as IconClose } from '../../assets/images/icons/close.svg'
import product1JPG from '../../assets/images/product-search/imagem1-1.jpg'
import product2JPG from '../../assets/images/product-search/imagem1-2.jpg'
import product3JPG from '../../assets/images/product-search/imagem1-3.jpg'
import product4JPG from '../../assets/images/product-search/imagem1-4.jpg'
import product5JPG from '../../assets/images/product-search/imagem1-5.jpg'
import product6JPG from '../../assets/images/product-search/imagem1-6.jpg'
import product7JPG from '../../assets/images/product-search/imagem1-7.jpg'
import product8JPG from '../../assets/images/product-search/imagem1-8.jpg'
import product9JPG from '../../assets/images/product-search/imagem1-8.jpg'
import { FilterApplied } from '../../components/FilterApplied'

const products = [
  {
    src: product1JPG,
    name:
      'Notebook Lenovo Core i5-1035G1 8GB 1TB Tela 15.6” Windows 10 Ideapad S145',
    price: 'R$ 3.704,05',
  },
  {
    src: product2JPG,
    name:
      'Notebook Dell Core i7-8565U 8GB 256GB SSD Tela 15.6” Windows 10 Inspiron 3583-AS90P',
    oldPrice: 'R$ 4.999,00',
    price: 'R$ 3.704,05',
  },
  {
    src: product3JPG,
    name:
      'Multifuncional HP DeskJet Ink Advantage 2776 Wireless - Impressora, Copiadora, Scanner',
    oldPrice: 'R$ 499,00',
    price: 'R$ 373,15',
  },
  {
    src: product4JPG,
    name:
      'Computador LG All in One Quad Core 4GB 500GB Tela Full HD 21.5” Windows 10 22V280-L.BJ31P1',
    price: 'R$ 3.798,00',
  },
  {
    src: product5JPG,
    name:
      'Notebook Samsung Dual Core 4GB 64GB SSD Tela Full HD 13.3” Windows 10 Flash F30',
    price: 'R$ 2.849,00',
  },
  {
    src: product6JPG,
    name:
      'Tablet Samsung T505 A7 64GB, 3GB RAM, Tela de 10.4", Câmera Traseira 8MP, Câmera Frontal',
    oldPrice: 'R$ 1.619,10',
    price: 'R$ 1.499,00',
  },
  {
    src: product7JPG,
    name:
      'Multifuncional Tanque de Tinta Epson EcoTank L3150 Wireless - Impressora, Copiadora, Scanner',
    oldPrice: 'R$ 1.449,00',
    price: 'R$ 1.124,10',
  },
  {
    src: product8JPG,
    name: 'Positivo Twist Tabkids Preto Vem Com Capa Emborrachada',
    price: 'R$ 349,00',
  },
  {
    src: product9JPG,
    name:
      'Notebook Gamer Acer Aspire Nitro AN515-43-R9K7 AMD R5 8GB (GeForce GTX1650 4GB) 1TB + 256...',
    price: 'R$ 5.634,84',
  },
]

const voltagemConfig = {
  title: 'Voltagem',
  items: [
    '110v',
    '220v '
  ]
}

export function Category() {

  const [filterMobileState, setFilterMobileState] = useState(false)

  function handleClickFilterMobile() {
    setFilterMobileState(state => !state)
  }

  return (
    <div className="l-category container">
      <div className="row">
        <Breadcrumb className="my-5" list={[
          { href: "#", link: "Home" },
          { href: "#", link: "Home Office" },
          { href: "#", link: "Informática" }
        ]} />
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="l-category__title">Resultados de busca para <span className="u-color-primary-400">
            <strong>
              ”cafeteira”
            </strong>
          </span>
          </h2>
          <p className="l-category__visualization">Visualizando 1 - 15 de 24.660</p>
          <div className="l-category__line"></div>
        </div>
      </div>

      <div className="row justify-content-between mb-4">
        <div className="col-5 l-category__filter-button">
          <Button color="secondary" overflowHidden onClick={handleClickFilterMobile}>
            <FilterIcon className="mr-2" /> Filtrar
          </Button>
        </div>
        <div className="col-7 col-md-3">
          <Select name="relevantes">
            <option value="">Mais relevantes</option>
          </Select>
        </div>
      </div>

      <div className="row">
        <div className={`col-lg-3 l-category__filter-container ${filterMobileState ? 'l-category__filter-container--mobile' : ''}`}>
          {!filterMobileState && <FilterApplied className="u-mb-40" />}
          <h3 className="l-category__filter-title">Filtrar por</h3>

          <div className="l-category__filter-header--mobile">
            <h3 className="l-category__filter-title l-category__filter-title--mobile">Filtros</h3>
            <Button
              color="none"
              className="l-category__filter-close--mobile"
              overflowHidden
              onClick={handleClickFilterMobile}
            >
              <IconClose />
            </Button>
            <p className="l-category__filter-count--mobile">1.245 itens</p>
            <div className="l-category__line"></div>
            {filterMobileState && <FilterApplied className="u-mb-40" />}
          </div>
          <FilterCategory />
          <FilterDefault />
          <FilterDefault config={voltagemConfig} />
          <FilterDefault />
          {filterMobileState && (
            <div className="l-category__filter-clear--mobile">
              <Button>Limpar filtros</Button>
            </div>
          )}
        </div>
        <div className="col-lg-9 l-category__product-results">
          {
            products.map(product => (
              <ProductBox product={product} key={product.name} />
            ))
          }
        </div>
        <div className="col-lg-9 offset-lg-3">
          <div className="l-category__show-more u-centralize">
            <p className="l-category__show-more-text">
              Visualizando 1 - 15 de 24.660
            </p>
            <Button>Ver mais produtos</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

