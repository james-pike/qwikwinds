import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import { Logo } from "../Logo";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
    primaryBgColor: "#400080", // Default background color
    primaryColor: "#ffffff", // Default text color
  });

  const handleThemeUpdate = $((cssVars: Record<string, string>) => {
    const root = document.documentElement;
    Object.keys(cssVars).forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  });

  useVisibleTask$(() => {
    const colorInputs = document.querySelectorAll("input.input-color-picker");

    colorInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const cssPropName = `--primary-${target.getAttribute("data-id")}`;
        handleThemeUpdate({
          [cssPropName]: target.value,
        });

        // Update store for reactivity
        if (target.getAttribute("data-id") === "bg-color") {
          store.primaryBgColor = target.value;
        } else if (target.getAttribute("data-id") === "color") {
          store.primaryColor = target.value;
        }
      });
    });

    return () => {
      // Cleanup event listeners on dismount
      colorInputs.forEach((input) => {
        input.removeEventListener("input", () => {});
      });
    };
  });

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
          : "bg-white dark:bg-slate-900"
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0"></div>
      <div class="relative text-default py-2 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href="/">
            <Logo class="" />
          </a>
          <div class="flex items-center md:hidden ">
            <div class="flex flex-col items-center">
              <label class="text-sm">Background</label>
              <input
                class="cursor-pointer h-10 outline-none rounded-full w-10 input-color-picker"
                type="color"
                data-id="bg-color"
                name="Background"
                value={store.primaryBgColor}
              />
            </div>
            <div class="flex flex-col items-center ml-4">
              <label class="text-sm">Text Color</label>
              <input
                class="cursor-pointer h-10 outline-none rounded-full w-10 input-color-picker"
                type="color"
                data-id="color"
                name="Text Color"
                value={store.primaryColor}
              />
            </div>
            <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
            <ToggleMenu />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
          aria-label="Main navigation"
        >
          {/* Menu rendering logic */}
        </nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">
              <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
            </div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              <a
                href="https://github.com/onwidget/qwind"
                class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Download
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
