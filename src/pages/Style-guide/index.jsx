import { SectionTitle } from "./components/SectionTitle";
import { Button } from "../../components/Form/Button";
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
import { Tooltip } from '../../components/Tooltip';
import { AlertContent } from '../../components/AlertContent';
import { Filter } from '../../components/Filter';
import { SliderArrow } from '../../components/SliderArrow';

export function StyleGuide() {

  return (
    <>
      <section className="container-fluid py-5">
        <div className="row justify-content-between">
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

            <Button color="secondary" disabled showIcon>
              Secondary disabled
            </Button>
            <br />

            <Button color="secondary" showIcon>Secondary</Button>
            <br />

            <Button color="tertiary">Tertiary</Button>
            <br />

            <Button color="tertiary" disabled>
              Tertiary disabled
            </Button>
            <br />

            <Button color="primary" showIcon>
              Button
            </Button>
            <br />

            <Button color="primary" showIcon />
            <br />

            <Button color="primary" showIcon disabled />
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Loader</SectionTitle>
            <Loader />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
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
        <div className="row justify-content-between">
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
        <div className="row justify-content-between">
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
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Select</SectionTitle>
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
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Alert</SectionTitle>
            <Alert
              color="success"
              showIcon={false}
            >
              Example text alert mensagem success
            </Alert>
            <br />

            <Alert
              color="warning"
            >
              Example text alert mensagem warning
            </Alert>
            <br />

            <Alert
              color="lamp"
            >
              Example text alert mensagem lamp
            </Alert>
            <br />

            <Alert
              color="info"
            >
              Example text alert mensagem info
            </Alert>
            <br />

            <Alert
              color="error"
            >
              Example text alert mensagem error
            </Alert>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Alert Content</SectionTitle>
            <AlertContent
              color="success"
              showIcon={false}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nisl non odio ultricies vehicula. Suspendisse condimentum dictum laoreet.
            </AlertContent>
            <br />

            <AlertContent
              color="warning"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nisl non odio ultricies vehicula. Suspendisse condimentum dictum laoreet.
            </AlertContent>
            <br />

            <AlertContent
              color="lamp"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nisl non odio ultricies vehicula. Suspendisse condimentum dictum laoreet.
            </AlertContent>
            <br />

            <AlertContent
              color="info"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nisl non odio ultricies vehicula. Suspendisse condimentum dictum laoreet.
            </AlertContent>
            <br />

            <AlertContent
              color="error"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nisl non odio ultricies vehicula. Suspendisse condimentum dictum laoreet.
            </AlertContent>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Toggle Switch</SectionTitle>
            <ToggleSwitch />
            <br />
            <br />

            <ToggleSwitch>Label</ToggleSwitch>
            <br />
            <br />

            <ToggleSwitch defaultChecked>Active</ToggleSwitch>
            <br />
            <br />

            <ToggleSwitch disabled>Disabled</ToggleSwitch>
            <br />
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
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
        <div className="row justify-content-between">
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
            <Checkbox id="3" name="checkbox-name1" defaultChecked />
            <br />
            <Checkbox id="4" name="checkbox-name2" defaultChecked >
              Label - Checked
            </Checkbox>
          </div>
          <div className="col-4">
            <Checkbox id="5" name="checkbox-name" disabled />
            <br />
            <Checkbox id="6" name="checkbox-name" disabled>
              Disabled
            </Checkbox>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col-12">
            <SectionTitle>Tooltips</SectionTitle>
          </div>
          <div className="col-2">
            <Tooltip position="right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ipsum lobortis turpis tempor malesuada.
            </Tooltip>
          </div>
          <div className="col-2">
            <Tooltip position="top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ipsum lobortis turpis tempor malesuada.
            </Tooltip>
          </div>
          <div className="col-2">
            <Tooltip position="bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ipsum lobortis turpis tempor malesuada.
            </Tooltip>
          </div>
          <div className="col-2">
            <Tooltip position="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ipsum lobortis turpis tempor malesuada.
            </Tooltip>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
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
            <Radio id="radio-button-3" name="radio-button-name2" defaultChecked />
            <br />
            <Radio id="radio-button-4" name="radio-button-name2" defaultChecked >
              Label
            </Radio>
          </div>
          <div className="col-4">
            <Radio id="radio-button-5" name="radio-button-name3" disabled />
            <br />
            <Radio id="radio-button-6" name="radio-button-name3" disabled>
              Disabled
            </Radio>
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Filter</SectionTitle>
            <Filter tag="Lorem" showIcon />
            <br />
            <Filter tag="Lorem" />
            <br />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row justify-content-between">
          <div className="col">
            <SectionTitle>Slider Arrow</SectionTitle>
            <div className="row">
              <div className="col-3">
                <SliderArrow sense="left" />
              </div>
              <div className="col-3">
                <SliderArrow sense="right" />
              </div>
              <div className="col-3">
                <SliderArrow disabled sense="left" />
              </div>
              <div className="col-3">
                <SliderArrow disabled sense="right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
