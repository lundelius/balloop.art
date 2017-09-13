import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
// import { DataService } from '../services/data.service';

@Component({
  selector: 'wbc-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.scss']
})
export class PageStartComponent {
    public orderId = 3;
    public direction;

    constructor(private uiService2: UiService) {}
}
