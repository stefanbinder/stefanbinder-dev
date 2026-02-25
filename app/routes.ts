import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cv", "routes/cv.tsx"),
  route("/blog", "routes/blog/index.tsx"),
  route("/blog/the-rag-wall", "routes/blog/the-rag-wall.tsx"),
  route("/blog/building-the-sovereign-second-brain", "routes/blog/building-the-sovereign-second-brain.tsx"),
  route("/blog/the-art-of-failing-forward", "routes/blog/the-art-of-failing-forward.tsx"),
  route("/api/chat", "routes/api.chat.ts"),
] satisfies RouteConfig;
