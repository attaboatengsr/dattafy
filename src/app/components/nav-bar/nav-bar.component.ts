import { Component } from '@angular/core';
//import {MatListModule} from '@angular/material/list'
import { RouterModule} from '@angular/router';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, MatIconModule, MatButtonModule,MatTooltipModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
