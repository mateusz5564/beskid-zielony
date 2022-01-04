import Carousel from "react-bootstrap/Carousel";

const TextOnBgCarousel = () => {
  return (
    <div style={{backgroundImage: `url('/img/pasek.jpg')`, backgroundColor: 'red'}}>
      <Carousel controls={false} indicators={false} interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/pl.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/lem.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/lem.png" alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TextOnBgCarousel;
