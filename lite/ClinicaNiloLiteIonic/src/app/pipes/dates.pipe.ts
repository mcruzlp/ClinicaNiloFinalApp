import { Observable } from 'rxjs';
import { AppntService } from './../services/appnt.service';
import { Appointment } from './../model/appointment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates',
})
export class DatesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let minDate = value.sort((a: any, b: any) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);

      if (date2 > date1) {
        return 1;
      } else if (date2 < date1) {
        return -1;
      } else {
        return 0;
      }
    });

    return minDate;
  }
}
