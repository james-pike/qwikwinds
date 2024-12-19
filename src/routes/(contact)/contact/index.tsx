import { component$ } from "@builder.io/qwik";

import Pricing from "~/components/widgets/Pricing";


export default component$(() => {
  return (
    <>
     
      <Pricing
        highlight="Story"
        title="The story of Froppy the Kaspian Frog"
        subtitle="Leave some information in the form below, we're passionate about your project!"
      />
       <div class="h-50"></div>
    </>
  );
});


