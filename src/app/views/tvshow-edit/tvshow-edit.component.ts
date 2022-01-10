import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../../models/tvshow.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TvshowService } from '../../services/tvshow/tvshow.service';

@Component({
  selector: 'app-tvshow-edit',
  templateUrl: './tvshow-edit.component.html',
  styleUrls: ['./tvshow-edit.component.css'],
})
export class TvshowEditComponent implements OnInit {
  tvshow!: Tvshow;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tvshowService: TvshowService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.tvshowService.getTvshowById(+id!).then((tvshow: Tvshow) => {
      this.tvshow = tvshow;
    });
  }

  ngOnInit(): void {}

  /**
   * Function called when the user submit the updated ts show
   * @param tvshow
   */
  onsubmitEditedTvshow(tvshow: Tvshow) {
    this.tvshowService.editTvshow(tvshow).then(() => {
      this.router.navigateByUrl('/tvshows');
    });
  }
}
