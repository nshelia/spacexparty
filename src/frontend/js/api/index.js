import { getRequest } from './request'

export default {
  async getNextLaunch() {
    const launch = await getRequest('launches/next')

    return launch
  },
  async getRecentLaunches(limit) {
    const launch = await getRequest('launches',{
      limit
    })

    return launch
  }
}