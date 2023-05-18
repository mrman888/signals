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
  movieSig = signal<Movie | null>(null);
  injector = inject(EnvironmentInjector);
  newMovieSig = computed(() => {
    let newMovie = {
      name: 'Titanic',
      genre: 'Romance',
      releaseYear: 1997,
      upVote: this.movieSig()?.upVote,
    };
    return newMovie;
  });
  effectSig!: EffectRef;
  title = 'angular-signals';

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
    this.movieSig.set({
      name: 'Spider-Man',
      genre: 'Action, Aventure',
      releaseYear: 2002,
      upVote: 8,
    });
  }

  updateMovie() {
    this.movieSig.update((movie) => {
      if (movie) movie.upVote = movie.upVote + 1;
      return movie;
    });
  }

  mutateMovie() {
    this.movieSig.mutate((movie) => {
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
              this.movieSig()
            )}`
          );
        }))
    );
  }

  destroyEffect() {
    this.effectSig?.destroy();
  }
}
