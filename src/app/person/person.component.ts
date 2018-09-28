import { Person } from '../logic/Person';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {

  person: Person;

  constructor(private route: ActivatedRoute,
              private pservice: PersonService,
              private router: Router) { }

  routingSubscription: any;

  cancel() {
    this.router.navigate(['/']);
  }

  save () {
    this.pservice.savePerson(this.person, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.person = new Person();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params['id']);
        if (params['id']) {
          this.pservice.getPerson(params['id'], response => {
            this.person = response;
          });
        }
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
