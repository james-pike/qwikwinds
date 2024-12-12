import { component$ } from "@builder.io/qwik";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";
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
       <Tabs.Root class="max-w-[400px] bg-white/50">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Tab>Full Site ~$5000</Tabs.Tab>
        <Tabs.Tab>Monthly ~$250</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
      <Stats />
      <CallToAction />
    </>
  );
});


