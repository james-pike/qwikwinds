import { component$ } from "@builder.io/qwik";
import MemeCarousel from "~/components/widgets/MemeCarousel";

import Pricing from "~/components/widgets/Pricing";


export default component$(() => {
  return (
    <>
       <MemeCarousel/>
      <Pricing
        highlight="It's All About The Memes"
        title="Find your Favorites and Share them on X"
        // subtitle="Leave some information in the form below, we're passionate about your project!"
      />
     
    
    </>
  );
});


