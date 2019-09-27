import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITeam} from './team';
import {Observable} from 'rxjs';

@Injectable()
export class FooService {
  private url = '/assets/teams.json';

  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(this.url);
  }
}
