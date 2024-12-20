import { component$ } from "@builder.io/qwik";
import MemeCarousel from "~/components/widgets/MemeCarousel";

import Pricing from "~/components/widgets/Pricing";


export default component$(() => {
  return (
    <>
     
      <Pricing
        highlight="The Memes"
        title="The story of Froppy the Kaspian Frog"
        subtitle="Leave some information in the form below, we're passionate about your project!"
      />
       <MemeCarousel/>
    </>
  );
});


