export class Genre{
      id:number;
      name:string;
      subGenres:Array<Genre>[];
      parentGenreId:number
}