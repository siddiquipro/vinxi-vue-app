// import { Hono } from "hono";
// import { randomUUID } from "crypto";
// const app = new Hono().basePath("/api");

// app.get("/", (c) => {
//   return c.json({ message: "Hello Root!", date: new Date() });
// });

// app.get("/users", (c) => {
//   const users = Array.from({ length: 10 }, (_, i) => ({
//     id: randomUUID(),
//     name: `User ${i}`,
//     email: `user${i}@example.com`,
//   }));

//   return c.json({ date: new Date(), users });
// });

// export const honoApp = app;
