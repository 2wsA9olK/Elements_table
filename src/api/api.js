import * as axios from "axios";

export const elementsAPI = {
  getElements() {
    return axios.get(`https://assets.codepen.io/3685267/periodic-table-data.json`)
      .then(response => {
        return response.data
      });
  }
}