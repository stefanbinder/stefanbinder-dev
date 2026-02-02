import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cv", "routes/cv.tsx"),
  route("/blog", "routes/blog/index.tsx"),
  route("/blog/hello-world", "routes/blog/hello-world.tsx"),
  route("/api/chat", "routes/api.chat.ts"),
] satisfies RouteConfig;
