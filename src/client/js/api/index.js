import { getRequest } from "./request";

const api = {
  name: 'hello',
  async getNextLaunch() {
    const data = await getRequest("launches/next");

    return data;
  },
  async getRecentLaunches(limit) {
    const data = await getRequest("launches/past", {
      limit,
      order: "desc"
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
  },
  async getRockets(limit) {
    const data = await getRequest("rockets",{
      limit
    });

    return data;
  },
  async getShips(limit) {
    const data = await getRequest("ships",{
      limit
    });

    return data;
  },
  async getVehicles() {
    const { data: roadster } = await getRequest("roadster");
    const { data: rockets } = await getRequest("rockets");
    const { data: ships } = await getRequest("ships");

    return {
      roadster,
      rockets,
      ships
    }
  }
}

export default api
