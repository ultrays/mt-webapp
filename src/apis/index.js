import {INDEX} from "../commons/commons"
export class Index {
  static getCat(cb){
    fetch(INDEX).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
