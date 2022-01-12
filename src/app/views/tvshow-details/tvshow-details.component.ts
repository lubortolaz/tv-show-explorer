import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tvshow } from 'src/app/models/tvshow.model';
import { TvshowService } from '../../services/tvshow/tvshow.service';
import { CommentService } from '../../services/tvshow/comment.service';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
})
export class TvshowDetailsComponent implements OnInit {
  tvshow!: Tvshow;
  comments!: Comment[];

  nbComments: number;

  constructor(
    private route: ActivatedRoute,
    private tvshowService: TvshowService,
    private commentService: CommentService,
    private router: Router
  ) {
    this.nbComments = 3;
  }

  /**
   * Initialization tasks
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // get the tv show to display
    this.tvshowService.getTvshowById(+id!).then((tvshow: Tvshow) => {
      this.tvshow = tvshow;
    });

    // get the comments to display
    this.commentService
      .getAllCommentsByIdTvShow(+id!)
      .then((comments: Comment[]) => {
        this.comments = comments;
      });
  }

  /**
   * Show more comments
   */
  onClickShowMore() {
    this.nbComments += 3;
  }

  /**
   * Call the Comment service when a new comment is submitted
   * @param newComment : Comment
   */
  onSubmitNewComment(newComment: Comment) {
    this.commentService.addComment(newComment).then((comment: Comment) => {
      this.comments.unshift(comment);
    });
  }

  /**
   * Function called when the user click on the button delete the tvshow
   * @param id : number (id of the tv show to delete)
   */
  onClickBtnDelete(id: number) {
    if (confirm('Supprimer la série et tous ses commentaires ?')) {
      this.tvshowService.deleteTvshowById(id).then(() => {
        // redirect to the list of tv shows
        this.router.navigateByUrl('/tvshows');
      });
    }
  }

  /**
   * Function called when the super user click on the button delete a comment
   * @param id : number (id of the comment to delete)
   */
  onClickDeleteComment(id: number) {
    this.commentService.deleteCommentById(id).then(() => {
      for (let [index, comment] of this.comments.entries()) {
        if (comment.id === id) {
          this.comments.splice(index, 1);
          if (this.nbComments > 3) this.nbComments--;
          break;
        }
      }
    });
  }
}
