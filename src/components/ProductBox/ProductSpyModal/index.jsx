import { Select } from '../../Form/Select'
import { Button } from '../../Form/Button'

import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg'
import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/icons/arrow-large-right.svg'
import { ReactComponent as InfoIcon } from '../../../assets/images/icons/info.svg'

import imageFullJPG from '../../../assets/images/product-spy-modal/image-full.jpg'
import image1JPG from '../../../assets/images/product-spy-modal/imagem-1.jpg'
import image2JPG from '../../../assets/images/product-spy-modal/imagem-2.jpg'
import image3JPG from '../../../assets/images/product-spy-modal/imagem-3.jpg'
import image4JPG from '../../../assets/images/product-spy-modal/imagem-4.jpg'

const productMock = {
  id: 0,
  title: 'Cafeteira Elétrica Philco PH16 15 Xícaras - Vermelha/Aço Escovado',
  price: '',
  images: [
    imageFullJPG,
    image1JPG,
    image2JPG,
    image3JPG,
    image4JPG
  ]
}

export function ProductSpyModal({ productConfig = productMock, setProductSpyModalState }) {

  return (
    <div className="c-product-spy-modal">
      <div className="c-product-spy-modal__container">
        <div className="container">
          <div className="row">
            <header className="c-product-spy-modal__header col-12">
              <button className="c-product-spy-modal__close" onClick={() => setProductSpyModalState(false)}>
                <CloseIcon />
              </button>
            </header>
          </div>

          <div className="row">
            <div className="col-lg-5 offset-lg-1 c-product-spy-modal__image-container">
              <h3 className="c-product-spy-modal__title c-product-spy-modal__title--mobile">Cafeteira Elétrica Philco PH14 Inox - Preto Fosco e Prata</h3>
              <div className="c-product-spy-modal__main">
                <img src={productConfig.images[0]} alt={productConfig.title} />
              </div>

              <div className="c-product-spy-modal__footer">
                <button className="c-product-spy-modal__arrow"><ArrowLeftIcon /></button>
                {
                  productConfig.images.slice(1).map((image, index) => (
                    index === 0 ? (
                      <button key={image} className="c-product-spy-modal__item c-product-spy-modal__item--active">
                        <img
                          src={image}
                          alt={productMock.title}
                        />
                      </button>
                    ) : (
                      <button key={image} className="c-product-spy-modal__item">
                        <img
                          key={image}
                          src={image}
                          alt={productMock.title}
                        />
                      </button>
                    )
                  ))
                }
                <button className="c-product-spy-modal__arrow"><ArrowRightIcon /></button>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="c-product-spy-modal__description">
                <h3 className="c-product-spy-modal__title">Cafeteira Elétrica Philco PH14 Inox - Preto Fosco e Prata</h3>
                <div className="c-product-spy-modal__price-container">
                  <div className="c-product-spy-modal__price-container-for">
                    <span className="c-product-spy-modal__old-price">de R$ 198,90 </span>
                    <span className="c-product-spy-modal__for-price">por</span>
                  </div>
                  <span className="c-product-spy-modal__price">R$ 139,90</span>
                </div>

                <span className="c-product-spy-modal__line mb-4"></span>

                <Select className="c-product-spy-modal__select" name="voltagem" message="Voltagem">
                  <option value="">Selecione</option>
                  <option value="">127 V</option>
                  <option value="">220 V</option>
                </Select>

                <Button className="u-mt-32" color="tertiary" disabled>Adicionar ao carrinho</Button>

                <p className="c-product-spy-modal__availability">
                  <InfoIcon /> Selecione uma opção para ver a disponibilidade
                </p>

                <Button className="u-mt-32" color="secondary">Ver detalhes do produto</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}