import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prodouctserchbar',
  templateUrl: './prodouctserchbar.component.html',
  styleUrls: ['./prodouctserchbar.component.css'],
})
export class ProdouctserchbarComponent implements OnInit {
  public prodouctList: Array<any> = [];

  serchText: any = null;
  id:any;

  setSerchText() {
    console.log(this.serchText);

    this.ser.serchProdouct(this.serchText).subscribe((res: any) => {
      console.log(res);

      this.prodouctList = res.products;
      console.log(this.prodouctList);
    });
  }


  constructor(public ser: ApiService) {}

  ngOnInit(): void {}
}
