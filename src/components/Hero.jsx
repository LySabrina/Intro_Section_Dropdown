import "./Hero.scss";

export default function Hero() {
  return (
    <main>
      <div className="hero__img__container">
        <picture>
          <source
            srcSet="/Intro_Section_Dropdown/images/image-hero-desktop.png"
            media="(min-width:50em)"
          />
          <img
            src="/Intro_Section_Dropdown/images/image-hero-mobile.png"
            alt="Hero"
            className="hero__img"
          />
        </picture>
      </div>

      <div className="hero__info">
        <h1 className="hero__info__title">Make remote work</h1>
        <p className="hero__info__paragraph">
          Get your team in sync, no matter what your location. Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <button className="btn">
          <a href="#">Learn more</a>
        </button>

        <ul className="hero__info__sponsor">
          <li className="sponsor">
            <img src="/Intro_Section_Dropdown/images/client-databiz.svg" alt="Databiz" />
          </li>
          <li className="sponsor">
            <img src="/Intro_Section_Dropdown/images/client-audiophile.svg" alt="Audophile" />
          </li>
          <li className="sponsor">
            <img src="/Intro_Section_Dropdown/images/client-meet.svg" alt="Meet" />
          </li>
          <li className="sponsor">
            <img src="/Intro_Section_Dropdown/images/client-maker.svg" alt="Maker" />
          </li>
        </ul>
      </div>
    </main>
  );
}
