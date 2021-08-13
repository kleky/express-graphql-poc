import { Component } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs/internal/Observable';
import { ApolloQueryResult } from '@apollo/client/core';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'gql-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gql-poc-ng';

  random$: Observable<ApolloQueryResult<{ random: number }>>;

  constructor(private apollo: Apollo) {
    this.random$ = apollo.watchQuery<{ random: number }>({
      query: gql`
          {
            random
          }
        `,
    }).valueChanges.pipe(
      tap(e => console.log(e)),
    );
  }
}
