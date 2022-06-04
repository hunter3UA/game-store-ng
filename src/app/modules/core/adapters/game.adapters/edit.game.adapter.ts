import { Injectable } from '@angular/core';
import { EditGameDTO } from '../../api-models/game/edit.game.dto';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class EditGameAdapter implements Adapter<EditGameDTO> {
  adapt(item: any): EditGameDTO {
    let editGameModel: EditGameDTO = new EditGameDTO();
    editGameModel.id = item.id;
    editGameModel.key = item.key;
    editGameModel.description = item.description;
    editGameModel.name = item.name;
    editGameModel.price = item.price;
    editGameModel.unitsInStock = item.unitsInStock;
    editGameModel.discontinued = item.discontinued;

    return editGameModel;
  }
}
