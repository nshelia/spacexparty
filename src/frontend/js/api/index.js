import { getRequest } from './request'

export default {
  async getNextLaunch() {
    const data = await getRequest('launches/next')

    return data
  },
  async getRecentLaunches(limit) {
    const data = await getRequest('launches',{
      limit
    })

    return data
  },
  async getMissions(limit,mission_id) {
    const data = await getRequest('missions',{
      limit,
      mission_id
    })

    return data
  }
}