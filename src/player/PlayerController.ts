import { PlayerModel } from "./PlayerModel.ts";
import { PlayerView } from "./PlayerView.ts";

export module Teknikgymansiet {
  export class PlayerController {
      private _model: PlayerModel; // This class contains our information.
      private _view: PlayerView;
      private _activeWeapon: any;
      private _position:any;
      constructor(playerPicture:any) {
          this._model = new PlayerModel();
          this._view = new PlayerView(playerPicture);
      }

      // Force change the position of the player sprite.
      set position( x:number, y:nubmer ) {
        if( !this.view.playerSprite ){
            console.error("Tried to set position of a non existing PlayerSprite.");
          return;
        }
        this._position = { x: x, y: y };
        this.view.playerSprite.position = this._position;
      }

      // Get the world position of the player sprite.
      get position() : any {
        if( !this.view.playerSprite ){ // Sanity check, make sure we actually have a sprite.
            console.error("Tried to get position of a non existing PlayerSprite.");
          return;
        }

        return this.view.playerSprite.position;
      }

      public createPlayer() {
          // Create our display object
          this.view.createPlayerSprite();
      }

      get view() : PlayerView {
        return this._view;
      }

      get model() : PlayerModel {
        return this._model;
      }

  }
}
