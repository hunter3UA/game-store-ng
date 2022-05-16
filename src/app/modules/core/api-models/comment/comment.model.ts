export class Comment {
  constructor(
    public id: number,
    public name: string,
    public body: string,
    public answers: Array<Comment>
  ) {}
}
