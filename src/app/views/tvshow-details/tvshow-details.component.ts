import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tvshow } from 'src/app/models/tvshow.model';
import { TvshowService } from '../../services/tvshow/tvshow.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
})
export class TvshowDetailsComponent implements OnInit {
  tvshow!: Tvshow;

  constructor(
    private route: ActivatedRoute,
    private tvshowService: TvshowService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.tvshowService.getById(+id!).then((tvshow: Tvshow) => {
      this.tvshow = tvshow;
    });

    console.log(this.tvshow);
  }
}
