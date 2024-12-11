import { component$ } from "@builder.io/qwik";
import Features from "~/components/widgets/Features";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";





export default component$(() => {
  return (
    <>
     
      <Features
        highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
        
        ]}
      />
      
      <Stats />
      <CallToAction />
    </>
  );
});


