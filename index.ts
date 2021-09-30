import http from "http";
import { app } from "./src/server";

const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running (see http://localhost:${PORT})`);
});

process.on("uncaughtException", (error) => {
  console.log("Server closed because uncaughtException.");
  server.close();
  throw error;
});
process.on("unhandledRejection", (reason) => {
  console.log("Server closed because unhandledRejection.");
  server.close();
  throw reason;
});
process.on("SIGINT", () => {
  console.log("Server closed because interrupted (SIGINT).");
  server.close();
});
process.on("SIGTERM", () => {
  console.log("Server closed because terminated (SIGTERM).");
  server.close();
});
