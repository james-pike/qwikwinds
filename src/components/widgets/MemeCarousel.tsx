import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  // Updated array to hold image filenames
  const images = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg'];
  const isPlaying = useSignal<boolean>(false);

  useVisibleTask$(() => {
    isPlaying.value = true;
  });

  return (
    <>
      <Carousel.Root
        class="carousel-root px-3"
        gap={30}
        autoPlayIntervalMs={3500}
        bind:autoplay={isPlaying}
      >
        {/* <div class="carousel-buttons">
          <Carousel.Previous>Prev</Carousel.Previous>
          <Carousel.Player>{isPlaying.value ? <LuPause /> : <LuPlay />}</Carousel.Player>
          <Carousel.Next>Next</Carousel.Next>
        </div> */}
        <Carousel.Scroller class="carousel-scroller">
          {images.map((image, index) => (
            <Carousel.Slide key={image} class="carousel-slide">
              {/* Replace color with img for the images */}
              <img src={`/images/${image}`} alt={`Meme ${index + 1}`} />
              {/* <div>{index === 1 && <button>I stop autoplay on focus!</button>}</div> */}
            </Carousel.Slide>
          ))}
        </Carousel.Scroller>
      </Carousel.Root>
      <p>isPlaying: {isPlaying.value.toString()}</p>
      <button onClick$={() => (isPlaying.value = !isPlaying.value)}>
        Toggle autoplay
      </button>
    </>
  );
});




















