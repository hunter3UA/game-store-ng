import { Component, Input, OnInit } from '@angular/core';
import { AddGameModel } from 'src/app/modules/shared/models/addGameModel';
import { Genre } from 'src/app/modules/shared/models/genre';

import { GenreService } from 'src/app/modules/shared/services/genre/genre.service';
import { PlatformService } from 'src/app/modules/shared/services/platform/platform.service';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  genres:Array<Genre>;
  platforms:Array<any>;
  gameModel:AddGameModel=new AddGameModel();

  constructor(private genreService:GenreService,private platformService:PlatformService) { }

  ngOnInit(): void {
    this.loadGenres();
    this.loadPlatforms();
  }


  loadGenres(){
    this.genreService.getAllGenres().subscribe((data)=>{
      if(data){
        this.genres=data;
      }
    }, (err)=>{
      console.log(err);
    })
  }

  loadPlatforms(){
    this.platformService.getAllPlatforms().subscribe((data)=>{
      if(data){
        this.platforms=data;
        console.log(this.platforms);
      }
    },(err)=>{
      console.log(err);
    })
  }
  addGame(){
    console.log(this.gameModel);
  }

  onPlatformChange(value){

    this.gameModel.platformTypes= new Array<number>();
    this.gameModel.platformTypes.push(value);
    console.log(this.gameModel.platformTypes);
  }

}
