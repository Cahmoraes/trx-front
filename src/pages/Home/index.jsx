import { Hero } from '../../components/Hero'
import { Slider } from '../../components/Slider'

import product1 from '../../assets/images/product-1.jpg'
import product2 from '../../assets/images/product-2.jpg'
import product3 from '../../assets/images/product-3.jpg'
import product4 from '../../assets/images/product-4.jpg'

const sliderItems = [
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

export function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-1">
          <Hero />
        </div>
      </div>

      <div className="container mt-5">
        <Slider items={sliderItems} />
      </div>
    </>
  );
}
