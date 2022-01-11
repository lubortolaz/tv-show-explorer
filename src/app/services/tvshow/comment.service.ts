import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments!: Comment[];

  constructor(private authService: AuthService) {
    // initialization of the list of comments about the tv shows
    this.comments = [];
  }

  /**
   * Get all the comments of a tv show which id is passed on parameter
   * @param idTvShow : number (id of a tv show)
   * @returns : Comment[]
   */
  getAllCommentsByIdTvShow(idTvShow: number): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve, reject) => {
      let commentsList = [];
      for (let [index, comment] of this.comments.entries()) {
        if (comment.idTvShow === idTvShow) {
          commentsList.push(comment);
        }
      }
      resolve(commentsList);
    });
  }

  /**
   * Add a comment to the list of comments
   * @param newComment : Comment
   * @returns Comment (the new comment is returned for the display)
   */
  addComment(newComment: Comment) {
    // set id
    if (this.comments.length === 0) {
      newComment.id = 0;
    } else {
      newComment.id = this.comments[this.comments.length - 1].id + 1;
    }

    // set author
    newComment.author = this.authService.getUsername();

    // save the new comment
    return new Promise<Comment>((resolve, reject) => {
      this.comments.unshift(newComment);
      resolve(newComment);
    });
  }

  /**
   * Delete all the comments of a series whose id is passed in parameter
   * @param idTvShow : id of the tv show
   * @returns Promise<void>
   */
  deleteAllCommentsByIdTvshow(idTvShow: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let i = this.comments.length - 1; i >= 0; i--) {
        if (this.comments[i]['idTvShow'] === idTvShow) {
          this.comments.splice(i, 1);
        }
      }
      resolve();
    });
  }

  /**
   * Delete one comment whose id is passed in parameter
   * @param idTvShow : id of the tv show
   * @returns Promise<void>
   */
  deleteCommentById(idComment: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, comment] of this.comments.entries()) {
        if (comment.id === idComment) {
          this.comments.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }
}
