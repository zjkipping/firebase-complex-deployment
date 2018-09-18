import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: Observable<string>;

  constructor(db: AngularFirestore) {
    this.title = db.collection('details').valueChanges().pipe(
      filter(details => !!details && !(details.length === 0)),
      map(details => (details[0] as any).title)
    );
  }
}
