import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AsteroidDetailComponent } from './asteroid-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

describe('Asteroid detail component', () => {
    const route = {
        params: from([{id: 1}])
    };

    const router = {
        navigate: () => {}
    };

    let fixture: ComponentFixture<AsteroidDetailComponent>;
    let component: AsteroidDetailComponent;

    beforeEach(() => {
        spyOn(router, 'navigate');

        TestBed.configureTestingModule({
            declarations: [AsteroidDetailComponent],
            providers: [
                { provide: ActivatedRoute, useValue: route },
                { provide: Router, useValue: router }
            ]
        });

        // remove templateUrl

        TestBed.compileComponents();
        fixture = TestBed.createComponent(AsteroidDetailComponent);
        component = fixture.componentInstance;
    });

    describe('constructor', () => {
        it('should be defined', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('should set asteroidId to the value in the routeparam', () => {
            component.ngOnInit();
            expect(component.asteroidId).toEqual(1);
        });
    });

    describe('goBack', () => {
        it('should call router.navigate', () => {
            component.goBack();
            expect(router.navigate).toHaveBeenCalled();
        });
    });
});

/*
let fixture: ComponentFixture<StuurVacatureComponent>;
    let component: StuurVacatureComponent;

    beforeEach(() => {
        spyOn(contactCandidateService, 'getVacatures').and.callThrough();
        spyOn(contactCandidateService, 'getVacatureFormData').and.callThrough();
        spyOn(contactCandidateService, 'sendVacature').and.callThrough();

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                StuurVacatureComponent
            ],
            providers: [
                { provide: ContactCandidateService, useValue: contactCandidateService }
            ]
        });

        TestBed.overrideComponent(StuurVacatureComponent,
            {
                remove: {
                    templateUrl: 'stuur-vacature.component.html'
                },
                add: {
                    template: '<div>test</div>'
                }
            });

        TestBed.compileComponents();

        fixture = TestBed.createComponent(StuurVacatureComponent);
        component = fixture.componentInstance;
*/
