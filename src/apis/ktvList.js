import {KTVLIST} from "../commons/commons"
export class KtvList {
  static getCat(cb){
    fetch(KTVLIST).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
