import { Injectable } from '@angular/core';
import { Tvshow } from '../../models/tvshow.model';
import { CommentService } from './comment.service';
import { Comment } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  // the list of the tv shows
  tvshows: Tvshow[];

  // to save the last tv show id to simulate the database
  counter: number;

  constructor(private commentService: CommentService) {
    // list of tv shows
    this.tvshows = [];

    // for developpement mode, create a fake list of tv shows and fake comments
    this.createFakeListOfSuperTvshowsAndComments();

    // in absence of database, use this to set an id unique, even if a tv show is deleted
    this.counter = this.tvshows.length;
  }

  /**
   * Return the tv show which id is passed in paramater
   * @param id : number (id of the tv show)
   * @returns Tvshow
   */
  getTvshowById(id: number): Promise<Tvshow> {
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

  /**
   * Add a Tvshow to the list
   * @param tvshow : Tvshow
   */
  addNewTvshow(tvshow: Tvshow): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      // set unique id
      tvshow.id = this.counter;
      this.counter++;
      this.tvshows.push(tvshow);
      resolve(tvshow.id);
    });
  }

  /**
   * Update the tv show passed in parameters
   * @param editedTvshow : Tvshow
   */
  editTvshow(editedTvshow: Tvshow): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      for (let [index, tvshow] of this.tvshows.entries()) {
        if (tvshow.id === editedTvshow.id) {
          this.tvshows[index] = editedTvshow;
          resolve(editedTvshow.id);
          break;
        }
      }
    });
  }

  /**
   * Delete the tv show which id is passed in parameter
   * @param id : number (id of a tv show)
   */
  deleteTvshowById(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, tvshow] of this.tvshows.entries()) {
        if (tvshow.id === id) {
          this.tvshows.splice(index, 1);
          this.commentService.deleteAllCommentsByIdTvshow(id);
          resolve();
          break;
        }
      }
    });
  }

  /**
   * This function creates a fake list of tv show and comments in the absence of a database
   */
  /* prettier-ignore */
  createFakeListOfSuperTvshowsAndComments() {
    this.tvshows.push( new Tvshow(	0	,"Outlander", new Date("08/10/2014"),	6	,"?? la fin des ann??es 1940, durant sa seconde lune de miel, Claire, une ancienne infirmi??re de guerre, se retrouve soudain propuls??e au XVIIIe si??cle. Adaptation des romans de Diana Gabaldon.","https://img.betaseries.com/CT8KuZpKkq37K9vO75AJdbguuio=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F83df5a3116774519ed3da379ea1e3f92.jpg","Outlander est une r??ussite. Elle doit son succ??s, entre autres, au choix de ses cr??ateurs, Ronald D. Moore, ?? l???origine du reboot de Battlestar Galactica, et Diana Gabaldon, l???auteur des romans, de ne pas se cantonner ?? un seul genre."));
    this.tvshows.push( new Tvshow(	1	,"The Expanse", new Date("12/14/2015"),	4	,"Au 23e si??cle, les hommes ont colonis?? le syst??me solaire. Les Nations-Unies contr??lent la Terre. Mars est devenue une puissance militaire ind??pendante et les autres plan??tes d??pendent des ressources de la ceinture d'ast??ro??des, o?? les conditions de vie sont p??nibles et les habitants contraints de travailler durement. Au fil des ans, les tensions entre la Terre, Mars et la Ceinture ont pris une telle ampleur qu'une simple ??tincelle pourrait d??clencher une guerre. Dans ce contexte tendu, la disparition d'une jeune femme pousse un d??tective endurci et le capitaine d'un vaisseau ?? traverser le syst??me solaire pour r??v??ler la plus grande conspiration de l'Histoire de l'humanit??.","https://img.betaseries.com/9rGshAuzmhQdhmhAH7N9yr0LZYI=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F870a226c7cc1939b767517aae6d9733b.jpg","Ambiance ?? la Blade runner au sol, ?? la Alien dans les coins sombres et Star Wars dans l'espace, enqu??te digne des films policiers des ann??es 50 et politique de Babylon 5, tout y est."));
    this.tvshows.push( new Tvshow(	2	,"The Wheel of Time", new Date("11/20/2021"),	1	,"La vie de cinq villageois bascule quand une femme puissante et myst??rieuse leur r??v??le que l'un d'eux est l'enfant d'une ancienne proph??tie qui pourra plonger le monde dans les T??n??bres ?? jamais. Accepteront-ils de suivre cette inconnue afin de pr??server le Monde avant que le T??n??breux ne s'??chappe de sa prison et que l???Ultime Bataille ne commence ?","https://img.betaseries.com/pMNvZwds2Z9RFDr_199Ff1Ja9WI=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fb163ea3471c13ed5c5bbb7aa2e8ad0bd.jpg","Qu???on se le dise : dans l???univers de ?? La Roue du temps ??, les femmes ne sont pas que des faire-valoir. Ici, elles tiennent le haut de l???affiche et on les voit aussi ?? l???arri??re-plan ??tre trait??es en ??gales par leurs compagnons, ou exercer des m??tiers a priori r??serv??s aux messieurs."));
    this.tvshows.push( new Tvshow(	3	,"The Witcher", new Date("10/20/2019"),	2	,"Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde o?? les humains se r??v??lent souvent plus vicieux que les b??tes.","https://img.betaseries.com/YC8yfFHBxGoAM198MWV0gVMghvE=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fbc2dbf6560de1d6c322636631f546c4e.jpg","Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes ??tranges, la structure de l'histoire hasardeuse et une trame de fond compliqu??e. C'est beaucoup ?? avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser s??duire, n'h??sitez pas."));
    this.tvshows.push( new Tvshow(	4	,"The Handmaid's Tale", new Date("04/27/2017"),	4	,"Dans une soci??t?? dystopique et totalitaire au tr??s bas taux de natalit??, les femmes sont divis??es en trois cat??gories : les Epouses, qui dominent la maison, les Marthas, qui l'entretiennent, et les Servantes, dont le r??le est la reproduction.","https://img.betaseries.com/1iU6Q4yb_SFoR04E148ohOVmJt0=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F60165477869340a61467d8870d723e1c.jpg","Un thriller sp??culatif magnifiquement produit, un r??cit ??difiant qui m??rite toutes les louanges, en particulier ?? l'??gard d'Elizabeth Moss. Peut-??tre la premi??re s??rie de Hulu absolument essentielle."));
    this.tvshows.push( new Tvshow(	5	,"WandaVision", new Date("01/15/2017"),	1	,"Wanda Maximoff et Vision, deux super-h??ros menant une vie des plus normales, commencent ?? se douter que celle-ci n'est pas aussi parfaite qu???elle en a l'air.","https://img.betaseries.com/t48Vs4HKgFfoS2to-hruz0H2Qrw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Ff350e3ad53e472d5eaed667b1554cd1f.jpg","La forme choisie de la sitcom qui ??volue ?? chaque ??pisode consacr?? ?? une d??cennie sp??cifique, et ces anomalies qui viennent perturber la bonne humeur ambiante, font de ?? WandaVision ?? une s??rie ?? part, ??tonnante. Elizabeth Olsen et Paul Bettany reprennent leurs r??les de la saga ?? Avengers ?? avec brio."));
    this.tvshows.push( new Tvshow(	6	,"Loki", new Date("06/09/2021"),	1	,"Alors que Loki a ??t?? tu?? par Thanos dans Avengers : Infinity War, l'histoire prend place plus t??t, en 2012, dans une r??alit?? alternative cr????e par le Casse temporel des Avengers apr??s que le Loki de 2012 se fut ??chapp?? avec le Tesseract. Le Dieu de la Malice veut se servir des pouvoirs du Tesseract pour changer le cours de l'histoire humaine. Apr??s son ??vasion, il est emmen?? aupr??s du Tribunal des Variations Anachroniques (ou TVA), un organisme qui agit pour emp??cher toute personne qui tenterait d'alt??rer le pass?? ou le futur. ","https://img.betaseries.com/2cya28iWWuADcnetx8_gvvgY9tU=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F6f773cdbb40348ae47f41a2ad63b1039.jpg","Une excellente fa??on de prolonger et d??velopper l'un des meilleurs antagonistes (anti-h??ros?) du MCU. Tr??s tendu, de gros enjeux, des moments de rire et de tendresse et un final qui laisse supposer que la phase suivante va ??tre totalement folle ;) Une s??rie ?? ne pas manquer !"));
    this.tvshows.push( new Tvshow(	7	,"The Mandalorian ", new Date("11/12/2019"),	2	,"Apr??s les histoires de Jango et Boba Fett, un autre guerrier ??merge dans l'univers de Star Wars. Le Mandalorien se situe apr??s la chute de l'Empire et avant l'??mergence du Premier Ordre. Nous suivons les aventures du chasseur de primes isol?? dans la bordure ext??rieure de la galaxie, loin de l'autorit?? de la Nouvelle R??publique. ","https://img.betaseries.com/IXPv8jL5R24vJQ0e036OF-7uCtU=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc7ee5e7fd0e527635ae9afe27006f1ba.jpg","Tout simplement super, encore une s??rie qui agrandi l?????pop??e Star Wars !"));
    this.tvshows.push( new Tvshow(	8	,"The Last Kingdom", new Date("10/10/2015"),	4	,"Au IXe si??cle, l'Angleterre, s??par??e en de nombreux royaumes, est envahie par les Vikings. Alors que le royaume de Wessex est le seul ?? r??sister, Uhtred, le fils d'un noble, kidnapp?? par les Vikings lorsqu'il ??tait enfant, doit choisir entre son pays natal et le peuple qui l'a ??lev??.","https://img.betaseries.com/qw_fjbyJXzNrZAmoa6g4rd76u1E=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F417df2b1a017685806bb643d817005ae.jpg","The Last Kingdom ne joue pas dans la m??me ligue que Game of Thrones, et n'a pas l'ampleur ??pique de Vikings, mais son esth??tique ?? couper le souffle, ses sc??nes de combat r??ussies, et son intrigue fantastique en font une s??rie ?? ne pas manquer pour les fans du genre."));
    this.tvshows.push( new Tvshow(	9	,"Vikings", new Date("03/04/2013"),	6	,"Les exploits d'un groupe de vikings de la fin du 8??me si??cle jusqu'au milieu du 11??me, men?? par Ragnar Lodbrok, l'un des plus populaires h??ros viking de tous les temps, qui a r??gn?? quelques temps sur le Danemark et la Su??de???","https://img.betaseries.com/KRWPWgSVQbLOgiceIYKQGrvXwjE=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F4c508877342713606486f5bafae12d50.jpg","Vikings est une cr??ation de Michael Hirst, lequel avait d??j?? imagin?? The Tudors pour Showtime, et sa nouvelle s??rie est clairement destin??e ?? occuper le m??me terrain que celui de Game of Thrones. Ce qu'ont ces deux shows, et qui manque cruellement ?? Vikings, est une vraie intrigue. Pour la plupart, les personnages pr??sent??s inspirent peu d'int??r??t."));
    this.tvshows.push( new Tvshow(	10	,"Game of Thrones", new Date("11/01/2010"),	9	,"Il y a tr??s longtemps, ?? une ??poque oubli??e, une force a d??truit l'??quilibre des saisons. Dans un pays o?? l'??t?? peut durer plusieurs ann??es et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confr??rie de la Garde de Nuit, prot??geant le Royaume de toute cr??ature pouvant provenir d'au-del?? du Mur protecteur, n'a plus les ressources n??cessaires pour assurer la s??curit?? de tous. Apr??s un ??t?? de dix ann??es, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalit??s se jouent sur le continent pour s'emparer du Tr??ne de Fer, le symbole du pouvoir absolu.","https://img.betaseries.com/ehxvwkVLO2NcKcpevl3lfk_5c-M=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F4d09984be7bf0c385b21e2974bc12e8b.jpg","Game of Thrones excelle ?? de multiples niveaux - la splendide distribution (capable de d??livrer m??me les r??pliques les plus tarabiscot??es), ses intrigues de palais complexes, son humour subtil et sa tension constante. Par contre on attends toujours la neuvi??me saison..."));
    this.tvshows.push( new Tvshow(	11	,"The Walking Dead", new Date("11/01/2010"),	11	,"Le policier Rick Grimes se r??veille ?? l'h??pital apr??s un long coma. Il d??couvre avec effarement que le monde, ravag?? par une ??pid??mie, est envahi par les morts-vivants. Parti sur les traces de sa femme et de son fils, Rick arrive ?? Atlanta o??, avec un groupe de rescap??s, il va devoir apprendre ?? survivre.","https://img.betaseries.com/9P3Jb6WB4V7gy3a9spB2qlM1DvY=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fd338e649f57a342598ec430862798ad3.jpg","En tant que sc??nariste et r??alisateur, Frank Darabont apporte une touche d'humanit?? ?? une histoire classique de zombies qui ??vite le manich??isme habituel 'eux' contre 'nous'. Visuellement, on se croirait au cin??ma."));
    this.tvshows.push( new Tvshow(	12	,"Raised by Wolves", new Date("09/04/2020"),	1	,"Au XXIIe si??cle, la Terre est inhabitable, et la race humaine sur le point de s'??teindre. Deux andro??des sont envoy??s sur une plan??te lointaine, Kepler-22b, avec des embryons humains, avec pour mission de les y ??lever et ainsi de perp??tuer l'esp??ce. Mais des soldats d'un ordre religieux les y ont suivi et tentent de faire ??chouer ce projet.","https://img.betaseries.com/lxf4stYj75vs5wg6MyLD937s-PY=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fcb4cc8a7e15ddc3d0303ab5c39b9897e.jpg","Raised by Wolves est une provocation. Une provocation tout ?? fait absorbante. Le sc??nario est complexe, mais maintient le spectateur en d??s??quilibre de la bonne mani??re."));
    this.commentService.comments.push( new Comment(0,new Date("1/1/22"),"Grimdal","J'aime tellement  " + this.tvshows[0].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",0));
    this.commentService.comments.push( new Comment(1,new Date("12/12/2021"),"Raptor","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[6].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",6));
    this.commentService.comments.push( new Comment(2,new Date("11/28/2021"),"PetiteF??e","La s??rie est grandiose, foncez !!! " + this.tvshows[8].title + " ne peut que vous plaire !",8));
    this.commentService.comments.push( new Comment(3,new Date("11/10/2021"),"Pewfan","J'ai ador?? la s??rie  " + this.tvshows[4].title + " , les acteurs sont parfait ! ",4));
    this.commentService.comments.push( new Comment(4,new Date("10/23/2021"),"Seltade","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[10].title + " est  une s??rie ?? voir. ",10));
    this.commentService.comments.push( new Comment(5,new Date("10/19/2021"),"Kairrin","Une super belle s??rie que je recommande ! " + this.tvshows[3].title + " est une vraie r??ussite !!",3));
    this.commentService.comments.push( new Comment(6,new Date("9/27/2021"),"Potaaato","On fr??le la perfection avec  " + this.tvshows[11].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",11));
    this.commentService.comments.push( new Comment(7,new Date("9/24/2021"),"Neptendus","Que dire ? Si ce n'est que  " + this.tvshows[7].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",7));
    this.commentService.comments.push( new Comment(8,new Date("9/23/2021"),"RainbowMan","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[11].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",11));
    this.commentService.comments.push( new Comment(9,new Date("9/10/2021"),"Exominiate","Juste MAGNIFIQUE dans tous ses domaines!  " + this.tvshows[12].title + " <3 <3 <3 !!!",12));
    this.commentService.comments.push( new Comment(10,new Date("9/6/2021"),"Meyriu","Son c??t?? visuel merveilleux de  " + this.tvshows[0].title + " et le myst??re qu'elle d??gage ont quelque chose de fascinant.",0));
    this.commentService.comments.push( new Comment(11,new Date("8/15/2021"),"Ectobiologiste","Je n'ai pas trop aim??  " + this.tvshows[10].title + " . Je ne sais pas si je regarderai la suite???",10));
    this.commentService.comments.push( new Comment(12,new Date("8/3/2021"),"ItsGodHere","J'ai regard?? tous les ??pisodes de  " + this.tvshows[5].title + "  en une semaine ! Vivement la suite !!",5));
    this.commentService.comments.push( new Comment(13,new Date("7/18/2021"),"MaxMadMen","J'aime tellement  " + this.tvshows[4].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",4));
    this.commentService.comments.push( new Comment(14,new Date("6/27/2021"),"TankerTanker","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[0].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",0));
    this.commentService.comments.push( new Comment(15,new Date("6/5/2021"),"Felipero","La s??rie est grandiose, foncez !!! " + this.tvshows[0].title + " ne peut que vous plaire !",0));
    this.commentService.comments.push( new Comment(16,new Date("5/17/2021"),"TheFlyingBat","J'ai ador?? la s??rie  " + this.tvshows[9].title + " , les acteurs sont parfait ! ",9));
    this.commentService.comments.push( new Comment(17,new Date("5/4/2021"),"JustEpic","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[9].title + " est  une s??rie ?? voir. ",9));
    this.commentService.comments.push( new Comment(18,new Date("4/12/2021"),"LeGrandBlond","Une super belle s??rie que je recommande ! " + this.tvshows[3].title + " est une vraie r??ussite !!",3));
    this.commentService.comments.push( new Comment(19,new Date("3/31/2021"),"Azalee","On fr??le la perfection avec  " + this.tvshows[8].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",8));
    this.commentService.comments.push( new Comment(20,new Date("3/29/2021"),"OarisKiller","Que dire ? Si ce n'est que  " + this.tvshows[6].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",6));
    this.commentService.comments.push( new Comment(21,new Date("3/28/2021"),"LeHamster","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[11].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",11));
    this.commentService.comments.push( new Comment(22,new Date("3/22/2021"),"Dialove","Juste MAGNIFIQUE dans tous ses domaines!  " + this.tvshows[1].title + " <3 <3 <3 !!!",1));
    this.commentService.comments.push( new Comment(23,new Date("3/2/2021"),"Frexs","Son c??t?? visuel merveilleux de  " + this.tvshows[3].title + " et le myst??re qu'elle d??gage ont quelque chose de fascinant.",3));
    this.commentService.comments.push( new Comment(24,new Date("2/18/2021"),"Rofaly","Je n'ai pas trop aim??  " + this.tvshows[6].title + " . Je ne sais pas si je regarderai la suite???",6));
    this.commentService.comments.push( new Comment(25,new Date("2/14/2021"),"GeoMan","J'ai regard?? tous les ??pisodes de  " + this.tvshows[8].title + "  en une semaine ! Vivement la suite !!",8));
    this.commentService.comments.push( new Comment(26,new Date("2/2/2021"),"Kirna","J'aime tellement  " + this.tvshows[12].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",12));
    this.commentService.comments.push( new Comment(27,new Date("1/31/2021"),"Gruty","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[2].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",2));
    this.commentService.comments.push( new Comment(28,new Date("1/21/2021"),"Fridame","La s??rie est grandiose, foncez !!! " + this.tvshows[0].title + " ne peut que vous plaire !",0));
    this.commentService.comments.push( new Comment(29,new Date("1/3/2021"),"Fluxy","J'ai ador?? la s??rie  " + this.tvshows[5].title + " , les acteurs sont parfait ! ",5));
    this.commentService.comments.push( new Comment(30,new Date("12/15/2020"),"Drastics","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[0].title + " est  une s??rie ?? voir. ",0));
    this.commentService.comments.push( new Comment(31,new Date("11/29/2020"),"Grimace","Une super belle s??rie que je recommande ! " + this.tvshows[8].title + " est une vraie r??ussite !!",8));
    this.commentService.comments.push( new Comment(32,new Date("11/14/2020"),"Viiper","On fr??le la perfection avec  " + this.tvshows[1].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",1));
    this.commentService.comments.push( new Comment(33,new Date("11/14/2020"),"xXSerpentXx","Que dire ? Si ce n'est que  " + this.tvshows[2].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",2));
    this.commentService.comments.push( new Comment(34,new Date("10/24/2020"),"Cristobal","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[2].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",2));
    this.commentService.comments.push( new Comment(35,new Date("10/7/2020"),"Scubrina","Juste MAGNIFIQUE dans tous ses domaines!  " + this.tvshows[0].title + " <3 <3 <3 !!!",0));
    this.commentService.comments.push( new Comment(36,new Date("10/3/2020"),"Xanoneq","Son c??t?? visuel merveilleux de  " + this.tvshows[9].title + " et le myst??re qu'elle d??gage ont quelque chose de fascinant.",9));
    this.commentService.comments.push( new Comment(37,new Date("9/19/2020"),"McTimley","Je n'ai pas trop aim??  " + this.tvshows[2].title + " . Je ne sais pas si je regarderai la suite???",2));
    this.commentService.comments.push( new Comment(38,new Date("9/3/2020"),"LittleDank","J'ai regard?? tous les ??pisodes de  " + this.tvshows[9].title + "  en une semaine ! Vivement la suite !!",9));
    this.commentService.comments.push( new Comment(39,new Date("8/19/2020"),"Rocketman","J'aime tellement  " + this.tvshows[2].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",2));
    this.commentService.comments.push( new Comment(40,new Date("8/17/2020"),"ADN","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[2].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",2));
    this.commentService.comments.push( new Comment(41,new Date("8/16/2020"),"Ailleurs","La s??rie est grandiose, foncez !!! " + this.tvshows[4].title + " ne peut que vous plaire !",4));
    this.commentService.comments.push( new Comment(42,new Date("8/13/2020"),"Alfa","J'ai ador?? la s??rie  " + this.tvshows[2].title + " , les acteurs sont parfait ! ",2));
    this.commentService.comments.push( new Comment(43,new Date("8/8/2020"),"Ali??nor","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[2].title + " est  une s??rie ?? voir. ",2));
    this.commentService.comments.push( new Comment(44,new Date("7/28/2020"),"Beatrix","Une super belle s??rie que je recommande ! " + this.tvshows[12].title + " est une vraie r??ussite !!",12));
    this.commentService.comments.push( new Comment(45,new Date("7/22/2020"),"Caramel","On fr??le la perfection avec  " + this.tvshows[8].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",8));
    this.commentService.comments.push( new Comment(46,new Date("7/10/2020"),"Ciel","Que dire ? Si ce n'est que  " + this.tvshows[3].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",3));
    this.commentService.comments.push( new Comment(47,new Date("6/26/2020"),"Eden","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[0].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",0));
    this.commentService.comments.push( new Comment(48,new Date("6/15/2020"),"Elfira","Juste MAGNIFIQUE dans tous ses domaines!  " + this.tvshows[0].title + " <3 <3 <3 !!!",0));
    this.commentService.comments.push( new Comment(49,new Date("6/7/2020"),"Ficelle","Son c??t?? visuel merveilleux de  " + this.tvshows[2].title + " et le myst??re qu'elle d??gage ont quelque chose de fascinant.",2));
    this.commentService.comments.push( new Comment(50,new Date("5/21/2020"),"Fifi","Je n'ai pas trop aim??  " + this.tvshows[12].title + " . Je ne sais pas si je regarderai la suite???",12));
    this.commentService.comments.push( new Comment(51,new Date("5/7/2020"),"Hysturia","J'ai regard?? tous les ??pisodes de  " + this.tvshows[5].title + "  en une semaine ! Vivement la suite !!",5));
    this.commentService.comments.push( new Comment(52,new Date("4/27/2020"),"Isadora","J'aime tellement  " + this.tvshows[4].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",4));
    this.commentService.comments.push( new Comment(53,new Date("4/23/2020"),"Lana","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[6].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",6));
    this.commentService.comments.push( new Comment(54,new Date("4/21/2020"),"Lorie","La s??rie est grandiose, foncez !!! " + this.tvshows[5].title + " ne peut que vous plaire !",5));
    this.commentService.comments.push( new Comment(55,new Date("4/15/2020"),"Maria","J'ai ador?? la s??rie  " + this.tvshows[3].title + " , les acteurs sont parfait ! ",3));
    this.commentService.comments.push( new Comment(56,new Date("3/27/2020"),"Neige","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[3].title + " est  une s??rie ?? voir. ",3));
    this.commentService.comments.push( new Comment(57,new Date("3/20/2020"),"Dialove","Une super belle s??rie que je recommande ! " + this.tvshows[1].title + " est une vraie r??ussite !!",1));
    this.commentService.comments.push( new Comment(58,new Date("2/27/2020"),"Frexs","On fr??le la perfection avec  " + this.tvshows[2].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",2));
    this.commentService.comments.push( new Comment(59,new Date("2/6/2020"),"Rofaly","Que dire ? Si ce n'est que  " + this.tvshows[2].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",2));
    this.commentService.comments.push( new Comment(60,new Date("1/29/2020"),"GeoMan","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[4].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",4));
    this.commentService.comments.push( new Comment(61,new Date("1/11/2020"),"Kirna","Juste MAGNIFIQUE dans tous ses domaines!  " + this.tvshows[2].title + " <3 <3 <3 !!!",2));
    this.commentService.comments.push( new Comment(62,new Date("1/3/2020"),"Gruty","Son c??t?? visuel merveilleux de  " + this.tvshows[2].title + " et le myst??re qu'elle d??gage ont quelque chose de fascinant.",2));
    this.commentService.comments.push( new Comment(63,new Date("12/20/2019"),"Fridame","Je n'ai pas trop aim??  " + this.tvshows[3].title + " . Je ne sais pas si je regarderai la suite???",3));
    this.commentService.comments.push( new Comment(64,new Date("11/29/2019"),"Fluxy","J'ai regard?? tous les ??pisodes de  " + this.tvshows[1].title + "  en une semaine ! Vivement la suite !!",1));
    this.commentService.comments.push( new Comment(65,new Date("11/14/2019"),"Exominiate","J'aime tellement  " + this.tvshows[5].title + " ! Vue et revue plusieurs fois, j'ai h??te de voir la suite.",5));
    this.commentService.comments.push( new Comment(66,new Date("11/12/2019"),"Meyriu","Cette s??rie est formidable. J???ai enfil?? tous les ??pisodes de  " + this.tvshows[5].title + " d???un coup. Elle prend aux tripes et c???est difficile de d??crocher !",5));
    this.commentService.comments.push( new Comment(67,new Date("10/25/2019"),"Ectobiologiste","La s??rie est grandiose, foncez !!! " + this.tvshows[8].title + " ne peut que vous plaire !",8));
    this.commentService.comments.push( new Comment(68,new Date("10/8/2019"),"ItsGodHere","J'ai ador?? la s??rie  " + this.tvshows[6].title + " , les acteurs sont parfait ! ",6));
    this.commentService.comments.push( new Comment(69,new Date("9/29/2019"),"MaxMadMen","Bien interpr??t??e et visuellement aboutie, " + this.tvshows[5].title + " est  une s??rie ?? voir. ",5));
    this.commentService.comments.push( new Comment(70,new Date("9/21/2019"),"TankerTanker","Une super belle s??rie que je recommande ! " + this.tvshows[7].title + " est une vraie r??ussite !!",7));
    this.commentService.comments.push( new Comment(71,new Date("8/31/2019"),"Felipero","On fr??le la perfection avec  " + this.tvshows[2].title + " . Ils sont Fortiches. J???esp??re qu???il y aura rapidement une ??dition blu-ray 4K.",2));
    this.commentService.comments.push( new Comment(72,new Date("8/9/2019"),"TheFlyingBat","Que dire ? Si ce n'est que  " + this.tvshows[11].title + " .... C'est ??POUSTOUFLANT ! La qualit?? est l??, ind??niable, et ?? tous les niveaux. Je ne peux que rejoindre les commentaires dithyrambiques qu'il y a eu jusqu'?? pr??sent. Sacr?? boulot !",11));
    this.commentService.comments.push( new Comment(73,new Date("8/6/2019"),"JustEpic","Attention Masterclass!!!! Visuellement sublime ! Le sc??nario de  " + this.tvshows[4].title + " et les personnages sont bien travaill??s, qu'on connaisse ou pas le lore la s??rie est incroyable, dans le top de l'ann??e.",4));
  }
}
