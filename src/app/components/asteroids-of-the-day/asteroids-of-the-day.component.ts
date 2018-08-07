import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsteroidService, Asteroid, AsteroidsRoot } from '../../shared';
import { Observable } from 'rxjs';

@Component({
    templateUrl: 'asteroids-of-the-day.html'
})
export class AsteroidsOfTheDayComponent implements OnInit {
    // these properties are used in the template to display stuff
    public asteroidList: Asteroid[];
    public today = '2018-07-30';

    /**
     * Constructor gets the service through the provider with DI
     * @param asteroidService Service that gets our little flying doomsday objects
     */
    constructor(private readonly asteroidService: AsteroidService, private readonly router: Router) {
    }

    /**
     * On init just call the service and get our list of possible asteroids for today
     */
    public ngOnInit(): void {
        this.asteroidService.getListOfAsteroids(this.today, this.today).subscribe(response => {
            // Get asteroids for the date I request
            if (response && response.near_earth_objects[this.today]) {
                const todaysObjects = response.near_earth_objects[this.today];
                // Now just fill my object with it for the tempate
                this.asteroidList = todaysObjects || [];
            }
        });
    }

    /**
     * Navigate to the detail
     */
    public openDetail(id: number): void {
        this.router.navigate(['detail', id]);
    }
}
