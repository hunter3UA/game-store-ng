import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {

  games:Array<any>;

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames(){
    this.gameService.getAllGames().subscribe((data)=>{
      if(data){
        this.games=data;
        console.log(data);
      }
    });
  }

}
