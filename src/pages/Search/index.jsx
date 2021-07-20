import { Breadcrumb } from "../../components/Breadcrumb";
import { Title } from "../../components/Title";
import { Accordion } from "../../components/Accordion";
import { ReactComponent as IconxTrash } from "../../assets/images/icons/icon-trash.svg";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Form/Button";
import { CloseLinkMobile } from "../../components/CloseLinkMobile";
import arrowUp from "../../assets/images/icons/arrow-mini.svg";
import arrowDown from "../../assets/images/icons/arrow-mini-down.svg";

export function Search() {
  const breadCrumb = [
    { href: "#", link: "Home" },
    { href: "#", link: "Resultados de busca" },
  ];
  return (
    <main>
      <section id="search" className="container">
        <div className="row justify-content-left">
          <div className="col-12">
            <Breadcrumb list={breadCrumb} />
          </div>
          <div className="col-md-12 col-lg-12 col-xl-3">
            <div className="search-content">
              <div className="search-filter">
                <div className="search-filter__header">
                  <Title
                    titleTag="h2"
                    size="heading-2"
                    weight="bold"
                    color="primary"
                    className="search-filter__title-mobile"
                  >
                    Matinais
                  </Title>
                  <Title
                    titleTag="h3"
                    size="heading-3"
                    weight="bold"
                    color="gray-1"
                    className="search-filter__title"
                  >
                    Filtrar
                  </Title>
                  <CloseLinkMobile to="/"></CloseLinkMobile>
                </div>
                <div className="search-filter__clean">
                  <Tag type="close active" text="Até R$ 50" />
                  <Tag type="close active" text="Lorem Ipsum" />
                  <Tag type="close active" text="Lorem Ipsum" />

                  <Button color="light">
                    Limpar todos os filtros
                    <IconxTrash />
                  </Button>
                </div>
              </div>
              <div className="search-result">
                <Accordion
                  title="Categorias"
                  iconOpened={arrowDown}
                  iconClosed={arrowUp}
                >
                  <div class="accordion-content__hiperlink">
                    <ul>
                      <li className="active">Lorem Ipsum (19)</li>

                      <li>Lorem Ipsum (19)</li>
                      <li>Lorem Ipsum (19)</li>
                      <li>Lorem Ipsum (19)</li>
                    </ul>
                  </div>
                </Accordion>

                <hr />

                <Accordion
                  title="Preço"
                  iconOpened={arrowDown}
                  iconClosed={arrowUp}
                >
                  <div class="accordion-content__tag">
                    <Tag text="Até R$ 50" />
                    <Tag text="R$ 50 - R$ 75" />
                    <Tag text="R$ 75 - R$ 100" />
                    <Tag text="R$ 100 - R$ 125" />
                  </div>
                </Accordion>

                <hr />

                <Accordion
                  title="Lorem Ipsum"
                  iconOpened={arrowDown}
                  iconClosed={arrowUp}
                >
                  <div class="accordion-content__tag">
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                  </div>
                </Accordion>

                <hr />

                <Accordion
                  title="Lorem Ipsum"
                  iconOpened={arrowDown}
                  iconClosed={arrowUp}
                >
                  <div class="accordion-content__tag">
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                  </div>
                </Accordion>

                <hr />

                <Accordion
                  title="Lorem Ipsum"
                  iconOpened={arrowDown}
                  iconClosed={arrowUp}
                >
                  <div class="accordion-content__tag">
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                    <Tag text="Lorem Ipsum" />
                  </div>
                </Accordion>

                <Button color="primary">Filtrar</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
