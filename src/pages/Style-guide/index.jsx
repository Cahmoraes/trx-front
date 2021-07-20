import { SectionTitle } from "./components/SectionTitle";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { ReactComponent as IconxBlue } from "../../assets/images/icons/arrow-blue.svg";
import { ReactComponent as IconxWhite } from "../../assets/images/icons/arrow-white.svg";
import { ReactComponent as IconxGray } from "../../assets/images/icons/arrow-gray.svg";
import { Checkbox } from "../../components/Form/Checkbox";
import { Select } from "../../components/Form/Select";
import { RadioButton } from "../../components/Form/RadioButton";
import { Loader } from "../../components/Loader";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Tooltip } from "../../components/Tooltip";
import { Hiperlink } from "../../components/Hiperlink";
import { Alert } from "../../components/Alert";
import { Title } from "../../components/Title";

export function StyleGuide() {
  const itens = [
    { href: "#", link: "Home" },
    { href: "#", link: "Page 1" },
    { href: "#", link: "Page 2" },
    { href: "#", link: "Page 3" },
  ];
  return (
    <section className="container-fluid py-5">
      <div className="row">
        <div className="col">
          <SectionTitle>Buttons</SectionTitle>
          <Button color="primary">Continuar</Button>
          <br />
          <Button color="primary" disabled>
            Continuar
          </Button>
          <br />
          <Button color="secondary">Continuar</Button>
          <br />
          <Button color="secondary" disabled>
            Continuar
          </Button>
          <br />
          <Button color="white">Continuar</Button>
          <br />
          <Button color="white" disabled>
            Continuar
          </Button>
          <br />
          <Button color="light">
            <IconxBlue/> images
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
          <Button color="white">
            <IconxBlue />
          </Button>
          <br />
          <Button color="secondary" disabled>
            <IconxGray />
          </Button>
          <br />
        </div>
      </div>

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

      <div className="row">
        <div className="col-12">
          <SectionTitle>Radio Button</SectionTitle>
        </div>
        <div className="col-4">
          <RadioButton id="radio-button-1" name="radio-button-name1" />
          <br />
          <RadioButton id="radio-button-2" name="radio-button-name1">
            Label
          </RadioButton>
        </div>
        <div className="col-4">
          <RadioButton id="radio-button-3" name="radio-button-name2" checked />
          <br />
          <RadioButton id="radio-button-4" name="radio-button-name2" checked>
            Label
          </RadioButton>
        </div>
        <div className="col-4">
          <RadioButton id="radio-button-5" name="radio-button-name3" disabled />
          <br />
          <RadioButton id="radio-button-6" name="radio-button-name3" disabled>
            Label
          </RadioButton>
          <br />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-12">
          <SectionTitle>Tooltips</SectionTitle>
        </div>
        <div className="col-2">
          <Tooltip position="right">
            aoskdpoakspodkaspodka paoskdáoskdpaoskd paooskdpoaksd´poask
            ´paoskd´paoskdaposk aspokda´spokda
          </Tooltip>
        </div>
        <div className="col-2">
          <Tooltip position="top">
            aoskdpoakspodkaspodka paoskdáoskdpaoskd paooskdpoaksd´poask
            ´paoskd´paoskdaposk aspokda´spokda
          </Tooltip>
        </div>
        <div className="col-2">
          <Tooltip position="bottom">
            aoskdpoakspodkaspodka paoskdáoskdpaoskd paooskdpoaksd´poask
            ´paoskd´paoskdaposk aspokda´spokda
          </Tooltip>
        </div>
        <div className="col-2">
          <Tooltip position="left">
            aoskdpoakspodkaspodka paoskdáoskdpaoskd paooskdpoaksd´poask
            ´paoskd´paoskdaposk aspokda´spokda
          </Tooltip>
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <SectionTitle>Select</SectionTitle>
          <Select name="select de teste" message="label">
            <option value="">SP</option>
            <option value="">RJ</option>
            <option value="">MG</option>
          </Select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <SectionTitle>Loader</SectionTitle>
          <Loader />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SectionTitle>Breadcrumb</SectionTitle>
          <Breadcrumb list={itens} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <SectionTitle>Hiperlink</SectionTitle>

          <div className="hiperlink">
            <Hiperlink link="google" href="google.com" size="large" />

            <Hiperlink link="google" href="google.com" size="small" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <SectionTitle>Titles</SectionTitle>
        </div>
        <div className="col-4">
          <Title titleTag="h1" size="heading-1" weight="black">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h1" size="heading-1" weight="bold">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title
            titleTag="h1"
            color="secondary"
            size="heading-1"
            weight="regular"
          >
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h2" size="heading-2" weight="black">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h2" size="heading-2" weight="bold">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h2" size="heading-2" weight="regular">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h3" size="heading-3" weight="black">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h3" size="heading-3" weight="bold">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h3" size="heading-3" weight="regular">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h4" size="heading-4" weight="black">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h4" size="heading-4" weight="bold">
            Lorem ipsum
          </Title>
          <br />
        </div>
        <div className="col-4">
          <Title titleTag="h4" size="heading-4" weight="regular">
            Lorem ipsum
          </Title>
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <SectionTitle>Alert</SectionTitle>
          <Alert
            className="alert-success"
            text="Example text alert mensagem success"
            alt="Example text alert mensagem success"
          />
          <br />
          <Alert
            className="alert-info"
            text="Example text alert mensagem info"
            alt="Example text alert mensagem info"
          />
          <br />
          <Alert
            className="alert-warning"
            text="Example text alert mensagem warning"
            alt="Example text alert mensagem warning"
          />
          <br />
          <Alert
            className="alert-error"
            text="Example text alert mensagem error"
            alt="Example text alert mensagem error"
          />
        </div>
      </div>
    </section>
  );
}
