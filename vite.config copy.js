import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import Product from "./src/components/Product.vue";
// import SayHello from "./src/components/SayHello.vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        conter: "counter.html",
        sayHello: "say-hello.html",
        styel: "style.html",
        score: "score.html",
        todolist: "todolist.html",
        contact: "contact.html",
        product: "product.html",
        note: "note.html",
        button: "button.html",
      },
    },
  },
});
