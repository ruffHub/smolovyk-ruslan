import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfigProviderService {
  private configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    console.log(environment);
    return this.http.get(this.configUrl);
  }
}
