export class Comment {

  private _id: number;
  private _dateCreation: Date;
  private _author: string;
  private _content: string;
  private _idTvShow: number;

  constructor(id: number, dateCreation: Date, author: string, content: string, idTvShow: number) {
    this._id = id;
		this._dateCreation = dateCreation;
		this._author = author;
		this._content = content;
		this._idTvShow = idTvShow;
	}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get dateCreation(): Date {
    return this._dateCreation;
  }

  public set dateCreation(dateCreation: Date) {
    this._dateCreation = dateCreation;
  }

  public get author(): string {
    return this._author;
  }

  public set author(author: string) {
    this._author = author;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get idTvShow(): number {
    return this._idTvShow;
  }

  public set idTvShow(idTvShow: number) {
    this._idTvShow = idTvShow;
  }

}
