import { SectionTitle } from "./components/SectionTitle";
import { Button } from "../../components/Form/Button";
import { ReactComponent as IconxBlue } from "../../assets/images/icons/arrow-blue.svg";
import { ReactComponent as IconxWhite } from "../../assets/images/icons/arrow-white.svg";
import { ReactComponent as IconxGray } from "../../assets/images/icons/arrow-gray.svg";

export function StyleGuide() {

  return (
    <section className="container-fluid py-5">
      <div className="row">
        <div className="col">
          <SectionTitle>Buttons</SectionTitle>

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

      
    </section>
  );
}
