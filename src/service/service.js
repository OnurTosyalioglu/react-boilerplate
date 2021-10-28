import axios from 'axios'
import config from '../config/axios'

class Service {
  constructor(args) {
    this.route = args.route
    this.http = axios.create({
      baseURL: config.baseURL,
    })
  }

  findAll(filters) {}

  find(id) {}

  create(body) {}

  update({ id, body }) {}

  delete(id) {}
}

export default Service
