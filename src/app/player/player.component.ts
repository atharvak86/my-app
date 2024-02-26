import { Component } from '@angular/core';
import { Player } from '../entities/Player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  lstOfPlayer:Player[] = [new Player(200, "Sachin", 1, "India"),
    new Player(45, "Rohit", 2, "India"),
    new Player(7, "Dhoni", 5, "India"),
    new Player(98, "Bumrah", 1, "India"),
    new Player(10, "Atharva", 7, "India")]
}
