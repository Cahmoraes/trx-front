import { SectionTitle } from "./components/SectionTitle";
import { Button } from "../../components/Form/Button";
import { ReactComponent as IconxWhite } from "../../assets/images/icons/arrow-white.svg";
import { Loader } from '../../components/Loader';
import { Badge } from '../../components/Badge';
import { Hiperlink } from '../../components/Hiperlink';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { Alert } from '../../components/Alert';
import { ToggleSwitch } from '../../components/Form/ToggleSwitch';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Checkbox } from '../../components/Form/Checkbox';
import { Radio } from '../../components/Form/Radio';

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

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Input</SectionTitle>
            <Select name="select de teste" message="label">
              <option value="">SP</option>
              <option value="">RJ</option>
              <option value="">MG</option>
            </Select>
            <br />

            <Select disabled name="select de teste" message="label">
              <option value="">SP</option>
              <option value="">RJ</option>
              <option value="">MG</option>
            </Select>
            <br />

            <Select error name="select de teste" message="label">
              <option value="">SP</option>
              <option value="">RJ</option>
              <option value="">MG</option>
            </Select>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Alert</SectionTitle>
            <Alert
              color="alert-success"
              text="Example text alert mensagem success"
              alt="Example text alert mensagem success"
            />
            <br />

            <Alert
              color="alert-warning"
              text="Example text alert mensagem warning"
              alt="Example text alert mensagem warning"
            />
            <br />

            <Alert
              color="alert-error"
              text="Example text alert mensagem error"
              alt="Example text alert mensagem error"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Toggle Switch</SectionTitle>
            <ToggleSwitch />
            <br />
            <br />

            <ToggleSwitch>Label</ToggleSwitch>
            <br />
            <br />

            <ToggleSwitch checked>Active</ToggleSwitch>
            <br />
            <br />

            <ToggleSwitch disabled>Disabled</ToggleSwitch>
            <br />
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <SectionTitle>Breadcrumb</SectionTitle>
            <Breadcrumb list={[
              { href: "#", link: "Home" },
              { href: "#", link: "Page 1" },
              { href: "#", link: "Page 2" },
              { href: "#", link: "Page 3" },
            ]} />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col-12">
            <SectionTitle>Checkbox</SectionTitle>
          </div>
          <div className="col-4">
            <Checkbox id="1" name="checkbox-name" />
            <br />
            <Checkbox id="2" name="checkbox-name">
              Label
            </Checkbox>
          </div>
          <div className="col-4">
            <Checkbox id="3" name="checkbox-name1" checked />
            <br />
            <Checkbox id="4" name="checkbox-name2" checked>
              Label
            </Checkbox>
          </div>
          <div className="col-4">
            <Checkbox id="5" name="checkbox-name" disabled />
            <br />
            <Checkbox id="6" name="checkbox-name" disabled>
              Label
            </Checkbox>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row">
          <div className="col-12">
            <SectionTitle>Radio Button</SectionTitle>
          </div>
          <div className="col-4">
            <Radio id="radio-button-1" name="radio-button-name1" />
            <br />
            <Radio id="radio-button-2" name="radio-button-name1">
              Label
            </Radio>
          </div>
          <div className="col-4">
            <Radio id="radio-button-3" name="radio-button-name2" checked />
            <br />
            <Radio id="radio-button-4" name="radio-button-name2" checked>
              Label
            </Radio>
          </div>
          <div className="col-4">
            <Radio id="radio-button-5" name="radio-button-name3" disabled />
            <br />
            <Radio id="radio-button-6" name="radio-button-name3" disabled>
              Label
            </Radio>
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
