import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AsteroidService } from './asteroid.service';

describe('Asteroid service', () => {
    let service: AsteroidService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                AsteroidService
            ]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(AsteroidService);
    });

    it('should be injectable...', () => {
        expect(service).toBeDefined();
    });

    describe('getListOfAsteroids', () => {
        it('should call the http service with the correct url', () => {
            const startDate = 'a';
            const endDate = 'b';
            const apiKey = '6eNGuM2BguP1AGqkqR4EhDuS7itTyt0H1py2tdFz';
            const baseUrl = 'https://api.nasa.gov/neo/rest/v1';

            service.getListOfAsteroids('a', 'b').subscribe();
            httpMock.expectOne(`${baseUrl}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`);
            httpMock.verify();
        });
    });
});
