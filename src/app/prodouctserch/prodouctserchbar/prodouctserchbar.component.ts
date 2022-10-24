import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-prodouctserchbar',
  templateUrl: './prodouctserchbar.component.html',
  styleUrls: ['./prodouctserchbar.component.css'],
})
export class ProdouctserchbarComponent implements OnInit {
  public prodouctList: Array<any> = [];

  serchText: any = null;
  id: any;

  constructor(public ser: ApiService) {}

  setSerchText() {
    this.ser.serchProdouct(this.serchText).subscribe((res: any) => {
      console.log(res);

      this.prodouctList = res.products;
      console.log(this.prodouctList);
    });
  }

  ngOnInit(): void {}
}
