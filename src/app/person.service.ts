import { Person } from './logic/Person';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  public endpoint = 'http://localhost:8080/v1/person';

  getAll(callback) {
    // Test
    // const list = [
    //  new Person('1001', 'Charlie', 'Brown', 'charlie.brown@peanuts.org'),
    //  new Person('1002', 'Lucy', 'VanPelt', 'lucy.vanpelt@peanuts.org')
    // ];
    // callback(list);

    // Spring API
    this.http.get(`${this.endpoint}/`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      });
  }

  savePerson(person, callback) {
    // Spring API
    if (person.id == null) {
      // create
      this.http.post(`${this.endpoint}/`, person)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // update
      this.http.put(`${this.endpoint}/${person.id}`, person)
        .subscribe(response => {
          callback(true);
        });
    }
  }

  deletePerson(id, callback) {
    // Spring API
    this.http.delete(`${this.endpoint}/${id}`)
      .subscribe(response => {
        callback(true);
      });
  }

  getPerson(id, callback) {
    // Spring API
    this.http.get(`${this.endpoint}/${id}`)
      .subscribe(response => {
        callback(response.json());
      });
  }

}
