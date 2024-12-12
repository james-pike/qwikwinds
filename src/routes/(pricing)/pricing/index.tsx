import { component$ } from "@builder.io/qwik";
import { Tabs } from "~/components/Tabs";
import { Card } from "~/components/Card";
import { Label } from "~/components/Label";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import Pricing from "~/components/widgets/Pricing";


export default component$(() => {
  return (
    <>
     
      <Pricing
        highlight="Pricing"
        title="Flexible Payment Options"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
      />
      
      <Tabs.Root class="max-w-[400px] bg-slate-50 dark:bg-slate-900 opacity-90">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Tab>Website ~ $5000</Tabs.Tab>
        <Tabs.Tab>Monthly ~ $250</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
        <Card.Header>
              <Card.Title class="text-primary">Complete Project - $5000 + hosting</Card.Title>
              <Card.Description>
                A one-time payment covering all services for your custom website:
                design, development, security, and initial setup.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Custom design and development</li>
                <li>Responsive and accessible layout</li>
                <li>SEO optimization</li>
                <li>Initial hosting setup</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-primary text-white hover:bg-primary-dark">
                Get Started
              </button>
            </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
        <Card.Header>
              <Card.Title class="text-primary">Monthly Plan - $250/month</Card.Title>
              <Card.Description>
                A recurring plan that ensures your website is up-to-date and secure:
                hosting, maintenance, and ongoing support.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Premium hosting services</li>
                <li>Regular updates and backups</li>
                <li>24/7 security monitoring</li>
                <li>Priority customer support</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-secondary text-white hover:bg-secondary-dark">
                Subscribe Now
              </button>
            </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
      
    </>
  );
});


