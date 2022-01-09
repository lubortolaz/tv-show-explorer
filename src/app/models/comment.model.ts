export class Comment {

  private _id: number;
  private _dateCreation: Date;
  private _author: string;
  private _content: string;

  constructor(_id: number, _dateCreation: Date, _author: string, _content: string) {
    this._id = _id
    this._dateCreation = _dateCreation
    this._author = _author
    this._content = _content
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

}
