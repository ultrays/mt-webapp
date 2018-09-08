import {KTV} from "../commons/commons"
export class Ktv {
  static getCat(cb){
    fetch(KTV).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
