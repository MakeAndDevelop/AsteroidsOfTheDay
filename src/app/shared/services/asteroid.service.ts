import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsteroidsRoot } from '..';
import { Observable } from 'rxjs';

// api key: 6eNGuM2BguP1AGqkqR4EhDuS7itTyt0H1py2tdFz
// documentation: https://api.nasa.gov/api.html#NeoWS
// sample req: GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY

@Injectable()
export class AsteroidService {
    private baseUrl: string;
    private apiKey: string;

    /**
     * Set some basic parameters for this service
     * @param http Dependency Injection of HttpClient
     */
    constructor(private readonly http: HttpClient) {
        this.baseUrl = 'https://api.nasa.gov/neo/rest/v1';
        this.apiKey = '6eNGuM2BguP1AGqkqR4EhDuS7itTyt0H1py2tdFz';
    }

    /**
     * Give me list of possible apocalypses. BOOM.
     * @param startDate Date to start search (you get for every day a list of asteroids)
     * @param endDate Date to end the search
     */
    getListOfAsteroids(startDate: string, endDate: string): Observable<AsteroidsRoot> {
        return this.http.get<AsteroidsRoot>(`${this.baseUrl}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`);
    }
}
