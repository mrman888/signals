import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';
import { StarWarsService } from './core/star-wars.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [StarWarsService],
  imports: [SignalsComponent],
  //imports: [SignalsComponent, HttpClientModule],
})
export class AppComponent {
  // constructor(private readonly starwarsService: StarWarsService) {
  //   this.starwarsService.getPeople().subscribe((content: string) => {
  //   });
  // }
}
