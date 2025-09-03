import "../PagesCSS/Hero.css";

export default function Hero() {
  const myName = (param, age) => {
    return "My Name is " + param + "and my age is " + age;
  };

  return (
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            Hero
            <p>{myName("Hamid Raza ", 23)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
