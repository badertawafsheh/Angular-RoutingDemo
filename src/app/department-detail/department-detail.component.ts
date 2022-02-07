import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      department-detail with id = {{departmentId}}
</h3>
<button (click)="goPrevious()">Previous</button >
<button (click)="goNext()">Next</button >
<div>
  <button style="padding: 10px ;
  margin-top: 20px;cursor: pointer;background-color: beige;" (click)="goToDepartments()">Back</button>
</div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.departmentId = id
    });
  }
  goPrevious() {
    let PreviousId = this.departmentId - 1;
    this.router.navigate(['/departments', PreviousId]);
  }
  goNext() {
    let NextId = this.departmentId + 1;
    this.router.navigate(['/departments', NextId]);

  }
  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }])
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route })

  }
}
