import {Component} from '@angular/core';
import {BodyComponent} from "@components/body/body.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BodyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
