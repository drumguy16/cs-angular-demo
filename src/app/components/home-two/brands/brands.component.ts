import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
