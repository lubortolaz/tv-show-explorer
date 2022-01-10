import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tvshow } from '../../models/tvshow.model';
import { TvshowService } from '../../services/tvshow/tvshow.service';

@Component({
  selector: 'app-tvshow-new',
  templateUrl: './tvshow-new.component.html',
  styleUrls: ['./tvshow-new.component.css'],
})
export class TvshowNewComponent implements OnInit {
  constructor(private tvshowService: TvshowService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Call the service to save the new tv show datas
   * @param newTvshow : Tvshow (the new tv show)
   */
  onsubmitNewTvshow(newTvshow: Tvshow) {
    this.tvshowService.addNewTvshow(newTvshow).then(() => {
      this.router.navigateByUrl('/tvshows');
    });
  }
}
