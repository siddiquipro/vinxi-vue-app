import { createApp } from "vinxi";
import vue from "@vitejs/plugin-vue";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      target: "browser",
      plugins: () => [vue()],
    },
    {
      name: "api",
      type: "http",
      base: "/api",
      target: "server",
      handler: "./server/index.ts",
    },
  ],
});
