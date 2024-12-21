import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import { LuPause, LuPlay } from '@qwikest/icons/lucide';

export default component$(() => {
  const images = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg'];
  const isPlaying = useSignal<boolean>(false);

  useVisibleTask$(() => {
    isPlaying.value = true;
  });

  return (
    <>
      <Carousel.Root
        class="carousel-root px-1 pt-1"
        gap={30}
        autoPlayIntervalMs={3500}
        bind:autoplay={isPlaying}
      >
        {/* Flex container for buttons */}
    

        {/* Carousel slides */}
        {images.map((image, index) => (
          <Carousel.Slide key={image} class="carousel-slide">
            <img src={`/images/${image}`} alt={`Meme ${index + 1}`} />
          </Carousel.Slide>
        ))}

<div class="carousel-buttons-container flex justify-between items-center w-full">
          {/* Left side: Carousel controls */}
          <div class="flex gap-4">
            <Carousel.Previous class="carousel-control">Prev</Carousel.Previous>
            <Carousel.Player class="carousel-control">
              {isPlaying.value ? <LuPause /> : <LuPlay />}
            </Carousel.Player>
            <Carousel.Next class="carousel-control">Next</Carousel.Next>
          </div>

          {/* Right side: Social share buttons */}
          <div class="social-share-buttons flex gap-4">
            <button class="social-button">Facebook</button>
            <button class="social-button">Twitter</button>
            <button class="social-button">Instagram</button>
          </div>
        </div>


      </Carousel.Root>
    </>
  );
});
