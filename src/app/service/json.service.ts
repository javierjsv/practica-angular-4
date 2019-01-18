import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {

  constructor(private httpClient: HttpClient) { }

  llamarJson() {
    return this.httpClient.get('https://api.github.com/users/hadley/repos');
  }
}
