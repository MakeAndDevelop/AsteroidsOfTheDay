import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'asteroid-detail.component.html'
})
export class AsteroidDetailComponent implements OnInit {
    asteroidId: number;
    paramSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.paramSubscription = this.route.params.subscribe(params => {
            this.asteroidId = params['id'];
        });
    }

    goBack() {
        this.router.navigate(['']);
    }
}
