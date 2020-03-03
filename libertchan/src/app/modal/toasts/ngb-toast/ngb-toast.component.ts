import { Component, OnInit } from '@angular/core';

import { NgbtoastService } from 'src/app/services/ngbtoast.service';




@Component({
  selector: 'app-ngb-toast',
  templateUrl: './ngb-toast.component.html',
  styleUrls: ['./ngb-toast.component.scss']
})
export class NgbToastComponent implements OnInit {

  constructor(public toastService: NgbtoastService) { }

  ngOnInit(): void {
  }

  //  not used -> used on message.component
  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 10000 });
  }

}
