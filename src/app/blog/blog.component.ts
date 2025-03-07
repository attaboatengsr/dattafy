import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';



@Component({
  selector: 'app-blog',
  imports: [CdkAccordionModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  years = [2024]
}
