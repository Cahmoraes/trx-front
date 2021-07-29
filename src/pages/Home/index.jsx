import { Hero } from '../../components/Hero';

export function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-1">
          <Hero />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <h1>Home</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}
