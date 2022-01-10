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

    // create a fake list of comments for the tv shows
    this.createFakeListOfComments();
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
      this.comments.push(newComment);
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
   * For the tests, this function creates a list of fake comments
   */
  createFakeListOfComments() {
    this.comments.push(
      new Comment(
        0,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Stella972',
        "J'aime tellement cette série . Vue et revue plusieurs fois, j'ai hâte de voir la suite.",
        1
      )
    );
    this.comments.push(
      new Comment(
        1,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'John Snow',
        'Une super belle série que je recommande !',
        1
      )
    );
    this.comments.push(
      new Comment(
        2,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Bourdillon',
        'Cette série est formidable. J’ai enfilé les 5 saisons d’un coup. Elle prend aux tripes et c’est difficile de décrocher. Certains épisodes sont vraiment bouleversants. Les acteurs sont excellents, les paysages sont splendides, l’univers est oufissime. J’ai longtemps hésité à la démarrer parce que je savais que j’allais être accro. Et en effet c’est ce qu’il s’est passé. c’est une série qu’il faut vraiment regarder si on aime le style historico fantastique et la romance. Vivement la suite ! ',
        1
      )
    );
    this.comments.push(
      new Comment(
        3,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Alex6111',
        'Une très bonne série avec une musique que j\'apprécie. Bonne reconstitution de l\'époque. "Destiny is all" :)',
        2
      )
    );
    this.comments.push(
      new Comment(
        4,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Machin Truc',
        'Extraordinaire !',
        2
      )
    );
    this.comments.push(
      new Comment(
        5,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'SoFanDeSeries',
        "Trop puissante cette série. La fin de la saison 2 est énorme. Un sans faute pour l'instant.",
        4
      )
    );
    this.comments.push(
      new Comment(
        6,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Mireille',
        "Pour le moment, une série qui tient ses promesses. Ne connaissant pas l'oeuvre originale, je découvre l'univers avec un œil non-avis et j'y trouve un bestiaire Fantasy riche et plaisant, et des acteurs qui font bien le job. Des allers-retours dans le temps et des royaumes en veux tu en voilà, qui peuvent rebuter de prime abord, mais qui trouvent tout leur sens au fur et à mesure que l'intrigue avance. The Witcher est une série à suivre de très près, hâte de voir la saison 2.",
        4
      )
    );
  }

  getRandomDate(from: Date, to: Date) {
    let f = from.getTime();
    let t = to.getTime();
    return new Date(f + Math.random() * (t - f));
  }
}
