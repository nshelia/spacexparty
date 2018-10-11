import axios from 'axios'

const HOST = "https://api.spacexdata.com/v2"

export default {
  async getNextLaunch() {
    const launch = await axios.get(`${HOST}/launches/next`)

    return launch
  },
  async getRecentLaunches() {
    const launch = await axios.get(`${HOST}/launches`)

    return launch
  }
}