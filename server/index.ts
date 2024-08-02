import { createApp, defineEventHandler } from "h3";
import { routes } from "./routes";

const app = createApp({ debug: true });

const logPath = defineEventHandler((event) => {
  console.log(`Middleware. Path: ${event.path}`);
});

app.use(logPath);
app.use(routes);

export default app.handler;
