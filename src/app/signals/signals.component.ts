import {
  Component,
  signal,
  computed,
  Signal,
  EffectRef,
  effect,
  Injector,
  Inject,
  inject,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from './signals.interface';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  standalone: true,
  imports: [MatIconModule, RouterOutlet, MatButtonModule],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          'max-height': '1000px',
          opacity: '1',
          visibility: 'visible',
        })
      ),
      state(
        'out',
        style({
          'max-height': '0px',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      transition('in => out', [animate('400ms ease-in-out')]),
      transition('out => in', [animate('400ms ease-in-out')]),
    ]),
  ],
})
export class SignalsComponent {
  movie = signal<Movie | null>(null);
  newMovie = computed(() => {
    let newMovie = {
      name: 'Titanic',
      genre: 'Romance',
      releaseYear: 1997,
      upVote: this.movie()?.upVote,
    };
    return newMovie;
  });
  effectSig!: EffectRef;
  title = 'angular-signals';
  injector = inject(EnvironmentInjector);

  constructor() {
    // this.effectSig = effect(() => {
    //   alert(
    //     `side effect angular signal after movie changes ${JSON.stringify(
    //       this.movieSig()
    //     )}`
    //   );
    // });
  }

  setMovie() {
    this.movie.set({
      name: 'Spider-Man',
      genre: 'Action, Aventure',
      releaseYear: 2002,
      upVote: 8,
    });
  }

  updateMovie() {
    this.movie.update((movie) => {
      if (movie) movie.upVote = movie.upVote + 1;
      return movie;
    });
  }

  mutateMovie() {
    this.movie.mutate((movie) => {
      if (movie) {
        movie.upVote = 2000;
      }
    });
  }

  createEffect() {
    // this.effectSig = effect(() => {
    //   alert(
    //     `side effect angular signal after movie changes ${JSON.stringify(
    //       this.movieSig()
    //     )}`
    //   );
    // });

    runInInjectionContext(
      this.injector,
      () =>
        (this.effectSig = effect(() => {
          alert(
            `side effect angular signal after movie changes ${JSON.stringify(
              this.movie()
            )}`
          );
        }))
    );
  }

  destroyEffect() {
    this.effectSig?.destroy();
  }
}
