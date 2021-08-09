import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductCarousel } from './ProductCarousel'
import { Button } from '../../components/Form/Button'
import { Slider } from '../../components/Slider'

import { ReactComponent as SuccessAlertIcon } from '../../assets/images/icons/success.svg'
import { ReactComponent as ArrowUpIcon } from '../../assets/images/icons/arrow-small-up.svg'
import { ReactComponent as HeartIcon } from '../../assets/images/icons/heart.svg'
import { ReactComponent as ShareIcon } from '../../assets/images/icons/share.svg'

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
  { id: 5, src: cadeiraMini4JPG, description: 'cadeira 5' }
]

const sliderChairItems = [
  {
    title: 'Cadeira de escritório Diretor Reclinável Preta',
    image: cadeira1,
    oldPrice: 'R$ 219,00',
    price: 'R$ 309,90'
  },
  {
    title: 'Cadeira Gamer Prizi Amarela',
    image: cadeira2,
    price: 'R$ 699,90'
  },
  {
    title: 'Cadeira de Escritório com Base Cromada',
    image: cadeira3,
    price: 'R$ 269,10'
  },
  {
    title: 'Cadeira de Escritório Presidente Giratória Eames Branca',
    image: cadeira4,
    price: 'R$ 756,71'
  }
]

export function ProductDetails() {
  return (
    <>
      <div className="l-product-details container">
        <Breadcrumb className="my-5" list={[
          { href: "#", link: "Home" },
          { href: "#", link: "Produto" }
        ]} />

        <div className="row">
          <div className="col-lg-6">
            <ProductCarousel productImages={productImages} />
          </div>
          <div className="col-lg-6 l-product-details__description-container">
            <h3 className="l-product-details__title">Cadeira de Escritório Diretor Giratória Preta</h3>
            <span className="l-product-details__price">R$ 433,79</span>
            <span className="l-product-details__line"></span>
            <Button className="u-mt-32" color="tertiary">Adicionar ao carrinho</Button>
            <span className="l-product-details__stock"><SuccessAlertIcon /> Item em estoque</span>
            <span className="l-product-details__line"></span>

            <div className="l-product-details__share-container">
              <span><HeartIcon /> Adicionar à Lista de Desejos</span>
              <span><ShareIcon /> Compartilhar</span>
            </div>

            <span className="l-product-details__line"></span>

            <div className="l-product-details__information">
              <span className="l-product-details__information-title">Detalhes do Produto <ArrowUpIcon /></span>
              <p className="l-product-details__information-content">
                Precisando de uma cadeira confortável para o seu ambiente de trabalho? Conte com a Cadeira de Escritório Oslo. Ela é ideal para proporcionar bom gosto para a decoração, deixando você muito mais à vontade para realizar as tarefas do dia. Com rodízios e regulagem de altura, ela facilita a sua movimentação e se adapta à sua necessidade.
              </p>
            </div>

            <div className="l-product-details__information">
              <span className="l-product-details__information-title">Especificações <ArrowUpIcon /></span>
              <p className="l-product-details__information-content">
                Cor: Preto <br />
                Instruções/Cuidados: Produto recomendado para uso doméstico. Limpar com pano macio seco ou levemente umedecido com água.  <br />
                Conteúdo da Embalagem1 Cadeira de Escritório
                Modelo: Oslo Diretor  <br />
                Material: Corino, Pistão a Gás, Metal Cromado
                Descrição do Tamanho:  <br />
                Altura : 94-104 cm  <br />
                Largura: 61 cm  <br />
                Profundidade: 62 cm; Altura do Assento ao Chão: 47-57cm; Altura do braço ao chão: 63-73 cm
                Densidade: 24  <br />
                Tipo do Encosto: Diretor  <br />
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