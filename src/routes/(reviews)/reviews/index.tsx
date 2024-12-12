import { component$ } from "@builder.io/qwik";

import Pricing from "~/components/widgets/Pricing";


export default component$(() => {
  return (
    <>
     
      <Pricing
        highlight="Client Reviews"
        title="Feedback From Our Clients"
        subtitle="Leave some information in the form below, we're passionate about your project!"
      />
      
    </>
  );
});


