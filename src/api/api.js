import * as axios from "axios";
import data from "./../data/data.json"

export const elementsAPI = {
  async getElements() {
    try {
      return axios.get(`https://assets.codepen.io/3685267/periodic-table-data.json`)
        .then(response => {
          return response.data
        });
    } catch (err) {
      return data;
    }
  }}