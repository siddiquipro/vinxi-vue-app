import { createRouter, defineEventHandler } from "h3";
import { randomUUID } from "crypto";

const router = createRouter();

router.get(
  "/root",
  defineEventHandler(() => {
    return { message: "Hello Api Root!", date: new Date() };
  })
);

router.get(
  "/users",
  defineEventHandler(() => {
    const users = Array.from({ length: 5 }, (_, i) => ({
      id: randomUUID(),
      name: `H3 User ${i}`,
      email: `user${i}@example.com`,
    }));
    return { date: new Date(), users };
  })
);

export const routes = router;
