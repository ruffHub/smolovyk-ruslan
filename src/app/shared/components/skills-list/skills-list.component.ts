import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
