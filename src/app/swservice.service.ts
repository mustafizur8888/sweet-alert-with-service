import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwserviceService {
  // https://stackoverflow.com/questions/36609998/angular-2-and-typescript-promises
  constructor() { }
  message(config: MessageConfig) {
    Swal({
      title: config.title,
      text: config.text,
      type: config.type,
      showCancelButton: false
    });
  }
  confirmMessage(config: MessageConfig): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) =>
      Swal(
        {
          title: config.title,
          text: config.text,
          type: config.type,
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!'
        }
      ).then(
        (res) => resolve(res.value)
      )
    );

    // return Swal({
    //   title: config.title,
    //   text: config.text,
    //   type: config.type,
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((res) => {
    //   res.dismiss;
    // });
  }

}
interface MessageConfig {
  title: string;
  text: string;
  type?: MessageAlertType;
}
export type MessageAlertType = 'success' | 'error' | 'warning' | 'info' | 'question';
