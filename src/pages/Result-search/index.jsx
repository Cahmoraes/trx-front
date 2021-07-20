import iconOpsError from "../../assets/images/icons/icon-ops.svg";
import { Title } from "../../components/Title";
import { Button } from "../../components/Form/Button";

export function ResultSearch({ list }) {
  return (
    <main>
      <section id="result" className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="result-content">
              <div class="result-content__image">
                <Title
                  titleTag="h2"
                  size="heading-2"
                  weight="bold"
                  color="$gray1"
                  className="result-title-mobile"
                >
                  Não encontramos resultados para “Geladeira”
                </Title>
                <img src={iconOpsError} alt="Error" className="Error" />
              </div>

              <div class="result-content__container">
                <Title
                  titleTag="h2"
                  size="heading-3"
                  weight="bold"
                  color="$gray1"
                  className="result-title"
                >
                  Não encontramos resultados para “Geladeira”
                </Title>

                <p className="result-content__description">
                  Você quis dizer...
                </p>

                <ul className="result-content__list">
                  {list &&
                    list.map((item) => (
                      <>
                        <li>
                          <a href={item.href}>{item.link}</a>
                        </li>
                      </>
                    ))}
                </ul>

                <p className="result-content__description">
                  Você pode também voltar para a nossa página inicial!
                </p>

                <Button color="primary" type="button">
                  Voltar à página inicial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
