import { SectionTitle } from "./components/SectionTitle";
import { Button } from "../../components/Form/Button";
import { ReactComponent as IconxWhite } from "../../assets/images/icons/arrow-white.svg";
import { Loader } from '../../components/Loader';
import { Badge } from '../../components/Badge';
import { Hiperlink } from '../../components/Hiperlink';
import { Input } from '../../components/Form/Input';

export function StyleGuide() {

  return (
    <>
      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Tipos de botões</SectionTitle>

            <Button color="primary">Primary</Button>
            <br />

            <Button color="primary" disabled>
              Primary disabled
            </Button>
            <br />

            <Button color="secondary">Secondary</Button>
            <br />

            <Button color="secondary" disabled>
              Secondary disabled
            </Button>
            <br />

            <Button color="tertiary">Tertiary</Button>
            <br />

            <Button color="tertiary" disabled>
              Tertiary disabled
            </Button>
            <br />

            <Button color="primary">
              <IconxWhite className="mr-3" /> Button
            </Button>
            <br />

            <Button color="primary">
              <IconxWhite />
            </Button>
            <br />

            <Button color="primary" disabled>
              <IconxWhite />
            </Button>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Loader</SectionTitle>
            <Loader />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Badge</SectionTitle>
            <Badge color="tertiary">Promoção</Badge>
            <br />

            <Badge color="primary">Exclusivo</Badge>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Hiperlink</SectionTitle>
            <Hiperlink size="large">Link Label Large</Hiperlink>
            <br />
            <Hiperlink size="small">Link Label Small</Hiperlink>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
          <SectionTitle>Input</SectionTitle>
          <Input label="Label" placeholder="Teste" />
          <br />
          <Input label="Label" placeholder="Teste" color="success" />
          <br />
          <Input
            label="Label"
            placeholder="insira seu email"
            showIcon={true}
            message="informação inválida"
            color="error"
          />
          <br />
          <Input
            label="Label"
            placeholder="insira seu email"
            message="informação inválida"
            disabled
          />
          <br />
          <Input
            color="error"
            label="Label"
            placeholder="insira seu email"
            link="isso é um link"
            href="https://uol.com.br"
            message="informação inválida"
          />
          <br />
          <Input
            label="Label"
            placeholder="Teste"
            color="success"
            link="isso é um link"
            href="https://uol.com.br"
          />
          <br />
          <Input
            label="Label"
            placeholder="Teste"
            link="isso é um link"
            href="https://uol.com.br"
          />
          <br />
          <Input
            label="Label"
            placeholder="insira seu email"
            message="informação inválida"
            link="isso é um link"
            href="https://uol.com.br"
            disabled
          />
          <br />
          </div>
        </div>
      </section>
    </>
  );
}
