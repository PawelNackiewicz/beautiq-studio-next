import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { InstagramMedia } from '../../pages';
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

const InstagramImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 460px;
  width: 460px;
  background-size: contain;
  background-repeat: no-repeat; 
`;

type ImageSliderProps = {
  images: InstagramMedia[];
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
            {images.map(({ media_url, id }, index) => (
              <Slide index={index} key={id}>
                <InstagramImage src={media_url} alt='Instagram - beautiq_studio_natalia_golomb'/>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
        <InstagramLink
          href="https://www.instagram.com/beautiq_studio_natalia_golomb"
          target="_blank"
          rel="noreferrer"
        >
          Zapraszam na mój Instagram
        </InstagramLink>
      </CarouselWrapper>
    );
  }

  return null;
}
