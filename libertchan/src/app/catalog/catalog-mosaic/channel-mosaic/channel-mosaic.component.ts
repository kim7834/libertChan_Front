import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicModalComponent } from 'src/app/modal/topic-modal/topic-modal.component';

@Component({
  selector: 'app-channel-mosaic',
  templateUrl: './channel-mosaic.component.html',
  styleUrls: ['./channel-mosaic.component.scss']
})
export class ChannelMosaicComponent implements OnInit {
  nbVignettes = 48;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openFormModal() {
    const modalRef = this.modalService.open(TopicModalComponent);

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
