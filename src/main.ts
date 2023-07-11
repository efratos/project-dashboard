import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/style/wind.css";
import { plugin, defaultConfig } from "@formkit/vue";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "ant-design-vue";
library.add(fas);

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

const app = createApp(App);

app.component("icon", FontAwesomeIcon);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(Carousel);
app.use(
  plugin,
  defaultConfig({
    config: {
      classes: {
        input:
          "p-2 rounded border w-full font-light text-gray-700 outline-none",
        label: "text-sm text-gray-700",
        message: "text-red text-xs",
      },
    },
  })
);

app.mount("#app");
