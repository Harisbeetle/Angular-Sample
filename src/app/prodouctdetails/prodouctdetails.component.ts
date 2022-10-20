import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prodouctdetails',
  templateUrl: './prodouctdetails.component.html',
  styleUrls: ['./prodouctdetails.component.css'],
})
export class ProdouctdetailsComponent implements OnInit {
  productid: any;
  id: any;
  product: any;

  constructor(public activatedRoute: ActivatedRoute, public ser: ApiService) {}

  viewProdouctDetails() {
    this.ser.getProdoutsDetails(this.productid).subscribe((res: any) => {
      console.log(res);

      this.product = res;

      console.log(this.productid);
    });
  }

  ngOnInit(): void {
    this.productid = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productid);

    this.viewProdouctDetails();
  }
}
