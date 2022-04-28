export class Genre{
   constructor(
    public id:number,
    public name:string,
    public subGenres:Array<Genre>[],
    public parentGenreId?:number,
   ){}


}