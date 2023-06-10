import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
return (
<Carousel fade>
    <Carousel.Item>
        <img className="d-block w-100" src="./assets/men.jpg" alt="men's clothing" />
        <Carousel.Caption>
            <h3>men's clothing</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="./assets/women.jpg" alt="women's clothing" />

        <Carousel.Caption>
            <h3>women's clothing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="./assets/jewelry.jpg" alt="jewelry" />

        <Carousel.Caption>
            <h3>Jewelry</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="./assets/electronic.jpg" alt="electronic" />

        <Carousel.Caption>
            <h3>Monitor</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
);
}

export default CarouselFade;