import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../../services/tvshow/tvshow.service';
import { Tvshow } from '../../models/tvshow.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.css'],
})
export class TvshowsListComponent implements OnInit {
  tvshows!: Tvshow[];

  constructor(private tvshowService: TvshowService, private router: Router) {}

  ngOnInit(): void {
    this.tvshows = this.tvshowService.tvshows;
  }

  onClickBtnDelete(id: number) {
    if (confirm('Supprimer la série et tous ses commentaires ?')) {
      this.tvshowService.deleteTvshowById(id).then(() => {
        //this.tvshows.splice(index, 1);
        //this.router.navigateByUrl('/tvshows');
      });
    }
  }
}
