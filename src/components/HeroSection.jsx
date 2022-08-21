import "../styles/hero-section.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <img src="./assets/hero-cover.png" alt="cover photo" />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
