import { Injectable } from '@angular/core';
import { EditGameModel } from '../../api-models/game/edit.game.model';
import { Adapter } from '../adapter';

@Injectable({ providedIn: 'root' })
export class EditGameAdapter implements Adapter<EditGameModel> {
  adapt(item: any): EditGameModel {
    let editGameModel: EditGameModel = new EditGameModel();
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
