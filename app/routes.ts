import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cv", "routes/cv.tsx"),
  route("/api/chat", "routes/api.chat.ts"),
] satisfies RouteConfig;
