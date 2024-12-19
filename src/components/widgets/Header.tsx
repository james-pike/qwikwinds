import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import { Logo } from "../Logo";
import { useContent } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";

export default component$(() => {
  const { menu } = useContent();
  const store = useStore({
    isScrolling: false,
    primaryBgColor: "#272fbb", // Default background color
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

              <input
                class="cursor-pointer h-10 outline-none rounded-full w-10 input-color-picker"
                type="color"
                data-id="bg-color"
                name="Background"
                value={store.primaryBgColor}
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
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => (
                <li key={key} class={items?.length ? "dropdown" : ""}>
                  {items?.length ? (
                    <>
                      <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center">
                        {text} <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                      </button>
                      <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              class="first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                              href={href2}
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a class="hover:text-link dark:hover:text-white px-4 py-3 flex items-centers" href={href}>
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
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
                Get Froppy
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
