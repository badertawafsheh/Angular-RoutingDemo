import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3 style="color:brown; font: 1.5em sans-serif;">
      Department List
</h3>
<ul style="color:brown; font: 1.2em sans-serif;">
<li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
  <span>{{department.id}} -</span>{{department.name}}
</li>
</ul>
  `,
  styles: [`ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 5px 10px;
    background-color: #EEEEEE;
    border: 1px solid #DDDDDD;
    
  }
  li.selected {
    color:red; 
  }
  `
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "React" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" },

  ];
  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route })
  }
  constructor(private route: ActivatedRoute, private router: Router) { }
  SelectedId;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.SelectedId = id
    });
  }
  isSelected(department) {
    return department.id === this.SelectedId
  }
}
