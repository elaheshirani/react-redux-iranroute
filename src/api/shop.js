import routes from './routes.json'
import places from './places.json'

const TIMEOUT = 100

export default {
  getRoutes: (cb, timeout) => setTimeout(() => cb(routes), timeout || TIMEOUT),
  getPlaces: ( cb, timeout) => setTimeout(() => cb(places), timeout || TIMEOUT)
}
