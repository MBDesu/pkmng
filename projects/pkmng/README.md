# Pkmng

pkmng is an Angular wrapper of [PokéAPI](https://pokeapi.co/).

It features auto caching in browser storage and enumerations to help consumers figure out what to pass to the API.


## Exposed Services

Exposed services (self-explanatory):
- `BerryService`
- `ContestService`
- `EncounterService`
- `EvolutionService`
- `GameService`
- `ItemService`
- `LocationService`
- `MachineService`
- `MoveService`
- `PokemonService`
- `UtilityService`


## Usage

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { BerryService, PkmngModule } from 'pkmng';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PkmngModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  berryService = inject(BerryService);

  ngOnInit(): void {
    this.berryService.getBerry('oran').subscribe((berryData) => {
      console.log(berryData);
    });
  }
}
```

## License

This software uses the MIT license. For more information, see [LICENSE](https://github.com/MBDesu/pkmng/blob/main/LICENSE).

## TODO

- [ ] in-code documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.
