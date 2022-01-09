import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tvshow } from 'src/app/models/tvshow.model';
import { TvshowService } from '../../services/tvshow/tvshow.service';
import { CommentService } from '../../services/tvshow/comment.service';
import { Comment } from 'src/app/models/comment.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
})
export class TvshowDetailsComponent implements OnInit {
  tvshow!: Tvshow;
  comments!: Comment[];

  constructor(
    private route: ActivatedRoute,
    private tvshowService: TvshowService,
    private commentService: CommentService,

    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.tvshowService.getById(+id!).then((tvshow: Tvshow) => {
      this.tvshow = tvshow;
    });

    this.commentService
      .getAllCommentsByIdTvShow(+id!)
      .then((comments: Comment[]) => {
        this.comments = comments;
      });
  }

  onSubmitNewComment(newComment: Comment) {
    this.commentService.addComment(newComment).then((comment: Comment) => {
      this.comments.push(comment);
    });
  }

  onClickBtnDelete(id: number) {
    if (confirm('Supprimer la série et tous ses commentaires ?')) {
      this.tvshowService.deleteTvshowById(id).then(() => {
        //this.tvshows.splice(index, 1);
        this.router.navigateByUrl('/tvshows');
      });
    }
  }
}
