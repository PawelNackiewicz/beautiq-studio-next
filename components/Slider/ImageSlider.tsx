import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InstagramLink = styled.a`
  margin-top: 16px;
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`;

type ImageSliderProps = {
  images: string[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  if (images.length) {
    return (
      <CarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={460}
          naturalSlideHeight={460}
          totalSlides={images.length}
          visibleSlides={4}
          isPlaying={true}
        >
          <Slider>
            {images.map((image, index) => (
                <Slide index={index} key={image}>
                  <Image alt={image} src={`/images/Instagram/${image}`} width={400} height={400} layout='intrinsic' quality={100} />
                </Slide>
            ))}
          </Slider>
        </CarouselProvider>
        <InstagramLink
          href="https://www.instagram.com/beautiq_studio_natalia_golomb"
          target="_blank"
          rel="noreferrer"
        >
          zajrzyj na mój Instagram
        </InstagramLink>
      </CarouselWrapper>
    );
  }

  return null;
}
