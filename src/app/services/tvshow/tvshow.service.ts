import { Injectable } from '@angular/core';
import { Tvshow } from '../../models/tvshow.model';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  tvshows: Tvshow[];

  constructor() {
    this.tvshows = [];
    this.createFakeListOfSuperTvshows();
  }

  getById(id: number) {
    return new Promise<Tvshow>((resolve, reject) => {
      for (let [index, tvshow] of this.tvshows.entries()) {
        if (tvshow.id === id) {
          console.log(tvshow.id);
          resolve(tvshow);
          break;
        }
      }
    });
  }

  deleteTvshowById(id: number) {
    return new Promise<void>((resolve, reject) => {
      for (let [index, tvshow] of this.tvshows.entries()) {
        if (tvshow.id === id) {
          this.tvshows.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }

  createFakeListOfSuperTvshows() {
    this.tvshows.push(
      new Tvshow(
        1,
        'Outlander',
        new Date('08/10/2014'),
        6,
        'À la fin des années 1940, durant sa seconde lune de miel, Claire, une ancienne infirmière de guerre, se retrouve soudain propulsée au XVIIIe siècle. Adaptation des romans de Diana Gabaldon.',
        'https://img.betaseries.com/CT8KuZpKkq37K9vO75AJdbguuio=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F83df5a3116774519ed3da379ea1e3f92.jpg',
        'Outlander est une réussite. Elle doit son succès, entre autres, au choix de ses créateurs, Ronald D. Moore, à l’origine du reboot de Battlestar Galactica, et Diana Gabaldon, l’auteur des romans, de ne pas se cantonner à un seul genre.'
      )
    );

    this.tvshows.push(
      new Tvshow(
        2,
        'The Last Kingdom',
        new Date('10/10/2015'),
        4,
        "Au IXe siècle, l'Angleterre, séparée en de nombreux royaumes, est envahie par les Vikings. Alors que le royaume de Wessex est le seul à résister, Uhtred, le fils d'un noble, kidnappé par les Vikings lorsqu'il était enfant, doit choisir entre son pays natal et le peuple qui l'a élevé. ",
        'https://img.betaseries.com/qw_fjbyJXzNrZAmoa6g4rd76u1E=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F417df2b1a017685806bb643d817005ae.jpg',
        "The Last Kingdom ne joue pas dans la même ligue que Game of Thrones, et n'a pas l'ampleur épique de Vikings, mais son esthétique à couper le souffle, ses scènes de combat réussies, et son intrigue fantastique en font une série à ne pas manquer pour les fans du genre."
      )
    );

    this.tvshows.push(
      new Tvshow(
        3,
        'The Wheel of Time',
        new Date('11/20/2021'),
        1,
        "La vie de cinq villageois bascule quand une femme puissante et mystérieuse leur révèle que l'un d'eux est l'enfant d'une ancienne prophétie qui pourra plonger le monde dans les Ténèbres à jamais. Accepteront-ils de suivre cette inconnue afin de préserver le Monde avant que le Ténébreux ne s'échappe de sa prison et que l’Ultime Bataille ne commence ? ",
        'https://img.betaseries.com/pMNvZwds2Z9RFDr_199Ff1Ja9WI=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fb163ea3471c13ed5c5bbb7aa2e8ad0bd.jpg',
        'Qu’on se le dise : dans l’univers de « La Roue du temps », les femmes ne sont pas que des faire-valoir. Ici, elles tiennent le haut de l’affiche et on les voit aussi à l’arrière-plan être traitées en égales par leurs compagnons, ou exercer des métiers a priori réservés aux messieurs. '
      )
    );

    this.tvshows.push(
      new Tvshow(
        4,
        'The Witcher',
        new Date('10/20/2019'),
        2,
        'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
        'https://img.betaseries.com/YC8yfFHBxGoAM198MWV0gVMghvE=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fbc2dbf6560de1d6c322636631f546c4e.jpg',
        "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas."
      )
    );

    /*this.tvshows.push(
      new Tvshow(3, 'The Wheel of Time', new Date('20/11/2021'), 1, '', '', '')
    );*/
  }
}
