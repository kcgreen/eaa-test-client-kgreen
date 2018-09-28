import { Person } from '../logic/Person';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Person];

  constructor(private pservice: PersonService,
              private router: Router) { }

  goPerson(person: Person) {
    this.router.navigate(['/person', person.id]);
  }

  delPerson(person: Person) {
    this.pservice.deletePerson(person.id, result => {
      if (result) {
        this.pservice.getAll(list => {
          this.list = list;
        });
      }
    });
  }

  ngOnInit() {
    this.pservice.getAll(list => {
      this.list = list;
    });
  }

}
