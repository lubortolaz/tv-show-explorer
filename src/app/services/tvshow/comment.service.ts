import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments!: Comment[];

  constructor(private authService: AuthService) {
    this.comments = [];
    this.createFakeListOfComments();
  }

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

  addComment(newComment: Comment) {
    // set id
    if (this.comments.length === 0) {
      newComment.id = 0;
    } else {
      newComment.id = this.comments[this.comments.length - 1].id + 1;
    }

    // set author
    newComment.author = this.authService.getUsername();

    // save new comment
    return new Promise<Comment>((resolve, reject) => {
      this.comments.push(newComment);
      resolve(newComment);
    });
  }

  createFakeListOfComments() {
    let i = 0;
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Stella972',
        "J'aime tellement cette série . Vue et revue plusieurs fois, j'ai hâte de voir la suite.",
        1
      )
    );
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'John Snow',
        'Une super belle série que je recommande !',
        1
      )
    );
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Bourdillon',
        'Cette série est formidable. J’ai enfilé les 5 saisons d’un coup. Elle prend aux tripes et c’est difficile de décrocher. Certains épisodes sont vraiment bouleversants. Les acteurs sont excellents, les paysages sont splendides, l’univers est oufissime. J’ai longtemps hésité à la démarrer parce que je savais que j’allais être accro. Et en effet c’est ce qu’il s’est passé. c’est une série qu’il faut vraiment regarder si on aime le style historico fantastique et la romance. Vivement la suite ! ',
        1
      )
    );
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Alex6111',
        'Une très bonne série avec une musique que j\'apprécie. Bonne reconstitution de l\'époque. "Destiny is all" :)',
        2
      )
    );
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'Machin Truc',
        'Extraordinaire !',
        2
      )
    );
    this.comments.push(
      new Comment(
        i++,
        this.getRandomDate(new Date('01/01/2020'), new Date()),
        'SoFanDeSeries',
        "Trop puissante cette série. La fin de la saison 2 est énorme. Un sans faute pour l'instant.",
        4
      )
    );
    this.comments.push(
      new Comment(
        i++,
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
