import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/jobs";

export function getJob(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
