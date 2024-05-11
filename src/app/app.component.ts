import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ThreejsTestComponent } from './threejs-test/threejs-test.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, ThreejsTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 

})
export class AppComponent {
  

}
