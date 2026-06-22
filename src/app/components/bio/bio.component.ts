import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-bio',
  imports: [MatGridListModule,
            MatIconModule,
            MatTooltipModule,
            MatToolbarModule
          ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {

}
