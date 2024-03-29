import { Injectable } from '@angular/core';
import { EditGameDTO } from '../../api-models/game/edit.game.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class EditGameAdapter implements Adapter<EditGameDTO> {
  adapt(item: any): EditGameDTO {
    let editGameModel: EditGameDTO = new EditGameDTO();
    //if (typeof item.id == typeof Number)
    editGameModel.id = item.id;
    editGameModel.newGameKey = item.key;
    editGameModel.description = item.description;
    editGameModel.name = item.name;
    editGameModel.price = item.price;
    editGameModel.unitsInStock = item.unitsInStock;
    editGameModel.discontinued = item.discontinued;
    editGameModel.publishedAt = item.publishedAt;
    editGameModel.numberOfViews = item.numberOfViews;
    editGameModel.quantityPerUnit = item.quantityPerUnit;
    return editGameModel;
  }
}
