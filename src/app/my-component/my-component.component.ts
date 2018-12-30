import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SwserviceService } from '../swservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private swserviceService: SwserviceService) { }

  ngOnInit() {
    this.swserviceService.confirmMessage({
      text: 'confirm',
      title: 'confirm',
      type: 'warning'
    }).then
      (
        (res) => console.log(res)
      );

  }

}
