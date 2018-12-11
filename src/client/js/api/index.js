import { getRequest } from "./request";

export default {
  async getNextLaunch() {
    const data = await getRequest("launches/next");

    return data;
  },
  async getRecentLaunches(limit) {
    const data = await getRequest("launches", {
      limit
    });

    return data;
  },
  async getMissions(limit, missionId) {
    const data = await getRequest("missions", {
      limit,
      missionId
    });

    return data;
  },
  async getLaunches(limit) {
    const data = await getRequest("launches", {
      limit
    });

    return data;
  },
  async getRoadster() {
    const data = await getRequest("roadster");

    return data;
  }
};
