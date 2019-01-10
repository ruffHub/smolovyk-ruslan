import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) {
  }

  getData(url) {
    const dataUrl = environment.baseUrl + url;
    return this.http.get(dataUrl);
  }
}
