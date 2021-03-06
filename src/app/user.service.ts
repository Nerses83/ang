import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  size = 8;

  constructor(private http: HttpClient) { }

  getUsers() {
    // console.log(this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=7&nat=gb'));

    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb');

    // return [
    //   {name: 'WFM 1'},
    //   {name: 'WFM 2'},
    //   {name: 'WFM 3'},
    //   {name: 'WFM 3'},
    //   {name: 'WFM 3'},
    //
    // ];
  }
  setSize(size) {
    this.size = size;
  }


}
