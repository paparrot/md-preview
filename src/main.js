import { createApp } from "vue";
import App from "./App.vue";
import marked from "marked";

const markedMixin = {
  methods: {
    md: function(input) {
      return marked(input, { sanitize: true });
    },
  },
};

createApp(App)
  .mixin(markedMixin)
  .mount("#app");
