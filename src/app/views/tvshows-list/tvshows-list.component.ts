import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../../services/tvshow/tvshow.service';
import { Tvshow } from '../../models/tvshow.model';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.css'],
})
export class TvshowsListComponent implements OnInit {
  tvshows!: Tvshow[];

  constructor(private tvshowService: TvshowService) {}

  ngOnInit(): void {
    this.tvshows = this.tvshowService.tvshows;
  }
}
