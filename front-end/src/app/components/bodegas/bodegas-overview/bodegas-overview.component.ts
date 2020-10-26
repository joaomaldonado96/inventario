import { Component, OnInit } from '@angular/core';
import { BodegaService } from 'src/app/services/bodega.service';

@Component({
  selector: 'app-bodegas-overview',
  templateUrl: './bodegas-overview.component.html',
  styleUrls: ['./bodegas-overview.component.scss']
})
export class BodegasOverviewComponent implements OnInit {

  public bodegas: any;
  constructor(private bodegaService: BodegaService) { }

  async ngOnInit() {
    this.bodegas = await this.bodegaService.getBodegas();
  }

}
