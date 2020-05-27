import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

export class HomeBuilderItem {
    constructor (
        public completed: boolean,
        public desc: string,
        public id: number,
        public info: string,
        public state: string,
        public todo: string
    ) {};
}

@Injectable()
export class HomeBuilderService {
    private backendUrl: string;
    constructor(private http: Http) {
        this.backendUrl = environment.backendUrl + '/' + environment.token;
    }

    public getItems() {
        return this.http.get(this.backendUrl + '/todos');
    }

    public completed(id: number) {
        return this.http.put(this.backendUrl + '/todo/'+ id + '/update/completed', '');
    }

    public uncompleted(id: number) {
        return this.http.put(this.backendUrl + '/todo/'+ id + '/update/uncompleted', '');
    }
}