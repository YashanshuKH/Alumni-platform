import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 50, // number of virtual users
  duration: "30s", // test time
};

export default function () {
  http.get("http://localhost:5173/"); // replace with your URL
  sleep(1);
}
