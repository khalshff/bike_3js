import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutmeComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
