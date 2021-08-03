import { ReactComponent as PhoneIcon } from '../../assets/images/icons/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/images/icons/email.svg'
import { ReactComponent as FacebookIcon } from '../../assets/images/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg'
import siteBlindadoPNG from '../../assets/images/site-blindado.png'
import ambienteSeguroPNG from '../../assets/images/ambiente-seguro.png'

export function Footer() {
  return (
    <footer className="l-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-10 offset-lg-1 l-footer__items">
            <div className="l-footer__item">
              <h3 className="l-footer__item-title">Você</h3>
              <ul className="l-footer__list">
                <li><a href="/">Login</a></li>
                <li><a href="/">Meus Dados</a></li>
                <li><a href="/">Meus Pedidos</a></li>
                <li><a href="/">Cadastro</a></li>
              </ul>
            </div>

            <div className="l-footer__item">
              <h3 className="l-footer__item-title">Sobre</h3>
              <ul className="l-footer__list">
                <li><a href="/">TRX</a></li>
                <li><a href="/">Termos de Uso</a></li>
                <li><a href="/">Políticas de Privacidade</a></li>
              </ul>
            </div>

            <div className="l-footer__item">
              <h3 className="l-footer__item-title">Dúvidas</h3>
              <ul className="l-footer__list">
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Formas de Pagamento</a></li>
                <li><a href="/">Atendimento Online</a></li>
                <li><a href="/">Trocas e Devoluções</a></li>
                <li><a href="/">Prazos de Entrega</a></li>
              </ul>
            </div>

            <div className="l-footer__item">
              <h3 className="l-footer__item-title">Contato</h3>
              <ul className="l-footer__list">
                <li>
                  <PhoneIcon />
                  <span className="l-footer__item-contato">0740-2226-2866</span>
                </li>
                <li>
                  <EmailIcon />
                  <span className="l-footer__item-contato">trx.store@contato.com</span><br />
                  <span className="l-footer__item-data">De Seg à Sex das 09h às 18h.</span>
                </li>
              </ul>
            </div>

            <div className="l-footer__item">
              <h3 className="l-footer__item-title">Mídias sociais</h3>
              <ul className="l-footer__list">
                <li>
                  <a href="/">
                    <FacebookIcon />
                  </a>
                  <a href="/">
                    <InstagramIcon />
                  </a>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-10 offset-lg-1 l-footer__line"></div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-7 offset-lg-1">
            <p>Formas de pagamento</p>
          </div>

          <div className="col-3">
            <p>Segurança</p>
            <img src={siteBlindadoPNG} alt="Site Blindado" />
            <img src={ambienteSeguroPNG} alt="Ambiente Seguro" />
          </div>
        </div>
      </div>
    </footer>
  )
}