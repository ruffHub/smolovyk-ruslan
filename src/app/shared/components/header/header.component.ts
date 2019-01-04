import {Component, OnInit} from '@angular/core';

import {IStates} from '../../../core/_interfaces/interfaces';
import {ConfigProviderService} from '../../../core/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public states: Array<IStates>;
  public title: string;

  constructor(private configProvider: ConfigProviderService) {
  }

  ngOnInit() {
    this.configProvider.getConfig().subscribe((data) => {
      this.states = data['states'];
      this.title = data['title'];
    });
  }

}
