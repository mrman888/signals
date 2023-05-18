import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';
import { StarWarsService } from './core/star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { getPeople } from './core/starwars-function';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [StarWarsService],
  //imports: [SignalsComponent],
  imports: [SignalsComponent, HttpClientModule],
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  // constructor() {
  //   inject(DestroyRef).onDestroy(() => {
  //     // Writte your cleanup logic
  //   })
  // }
  // constructor(private readonly starwarsService: StarWarsService) {
  //   starwarsService.getPeople().subscribe((content: string) => {
  //     debugger;
  //   });
  // }
  constructor() {
    ////.pipe(takeUntilDestroyed())

    getPeople().subscribe((content: string) => {
      debugger;
    });
  }

  // ngOnInit() {
  //   getPeople()
  //     .pipe(takeUntilDestroyed(this.destroyRef))
  //     .subscribe((content: string) => {
  //       debugger;
  //     });
  // }
}
