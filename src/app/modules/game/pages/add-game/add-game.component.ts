import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/modules/shared/models/genre';
import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  genres:Array<Genre>=[];
  platforms:Array<any>=[];
  publishers:Array<any>=[];

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.loadGenres();
  }


  loadGenres(){
    this.genreService.getAllGenres().subscribe((data)=>{
      if(data){
        this.genres=data;
        console.log(this.genres);
      }
    }, (err)=>{
      console.log(err);
    })
  }

  loadPlatforms(){

  }

  loadPublishers(){

  }

}
