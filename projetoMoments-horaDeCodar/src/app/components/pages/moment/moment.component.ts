import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  constructor(private momentService: MomentService, private route: ActivatedRoute) { }

  moment?: Moment;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }
}
