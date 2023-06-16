import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prouct-side-bar',
  templateUrl: './prouct-side-bar.component.html',
  styleUrls: ['./prouct-side-bar.component.css']
})
export class ProuctSideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToComponent() {
    this.router.navigate(['/prouct-page-component']);
  }
}
