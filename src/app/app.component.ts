import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';
import { StarWarsService } from './core/star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { getPeople } from './core/starwars-function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [StarWarsService],
  //imports: [SignalsComponent],
  imports: [SignalsComponent, HttpClientModule],
})
export class AppComponent {
  // constructor(private readonly starwarsService: StarWarsService) {
  //   starwarsService.getPeople().subscribe((content: string) => {
  //     debugger;
  //   });
  // }
  // constructor() {
  //   getPeople().subscribe((content: string) => {
  //     debugger;
  //   });
  // }
}
