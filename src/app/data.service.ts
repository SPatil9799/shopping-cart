import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }
  createUser(user){
    return this.http.post("  http://localhost:5555/userdata/",user)
    }

}


