export class Tvshow {
  private _id: number;
  private _title: string;
  private _release: Date;
  private _nbSeasons: number;
  private _description: string;
  private _urlImg: string;
  private _review: string;

  constructor(id: number, title: string, release: Date, nbSeasons: number, description: string, urlImg: string, review: string) {
    this._id = id;
    this._title = title.trim();
    this._release = release;
    this._nbSeasons = nbSeasons;
    this._description = description.trim();
    this._urlImg = urlImg.trim();
    this._review = review.trim();
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title.trim();
  }

  public get release(): Date {
    return this._release;
  }

  public set release(release: Date) {
    this._release = release;
  }

  public get nbSeasons(): number {
    return this._nbSeasons;
  }

  public set nbSeasons(nbSeasons: number) {
    this._nbSeasons = nbSeasons;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description.trim();
  }

  public get urlImg(): string {
    return this._urlImg;
  }

  public set urlImg(urlImg: string) {
    this._urlImg = urlImg.trim();
  }

  public get review(): string {
    return this._review;
  }

  public set review(review: string) {
    this._review = review.trim();
  }
}
