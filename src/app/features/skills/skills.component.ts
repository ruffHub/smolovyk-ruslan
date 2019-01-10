import {Component, OnInit} from '@angular/core';

import {DataProviderService} from '@app/core/_services';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Array<string>;
  public familiarWith: Array<string>;
  public understanding: Array<string>;

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit() {
    this.dataProvider
      .getData('skills-data.json')
      .subscribe((data) => {
        this.skills = data['skills'];
        this.familiarWith = data['familiarWith'];
        this.understanding = data['understanding'];
      });
  }

}
