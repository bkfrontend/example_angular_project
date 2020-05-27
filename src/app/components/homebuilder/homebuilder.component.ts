import { Component, OnInit } from '@angular/core';
import { HomeBuilderItem, HomeBuilderService } from '../../services/home-builder-service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
    selector: 'app-home-builder',
    templateUrl: './homebuilder.component.html',
    styleUrls: ['./homebuilder.component.scss']
})
export class HomebuilderComponent implements OnInit {
    public items: Array<HomeBuilderItem> = [];

    /**
     * @param {HomeBuilderService} homeBuilderService
     */
    public constructor(private homeBuilderService: HomeBuilderService) {}

    public ngOnInit() {
        this.getItems();
        IntervalObservable
            .create(150000)
            .subscribe(() => this.getItems());
    }

    public completed(item: HomeBuilderItem) {
        this.homeBuilderService
            .completed(item.id)
            .subscribe(
                (data) => {

                    item.completed = true;
                    this.getItems();
                }
            )
    }

    public uncompleted(item: HomeBuilderItem) {
        this.homeBuilderService
            .uncompleted(item.id)
            .subscribe(
                (data) => {
                    item.completed = false;
                    this.getItems();

                }
            )
    }

    private getItems() {
        this.homeBuilderService.getItems()
            .subscribe(
                (data) => {
                    this.items = [];

                    data.json().forEach((item) => {
                        this.items.push(
                            new HomeBuilderItem(
                                item.completed,
                                item.desc,
                                item.id,
                                item.info,
                                item.state,
                                item.todo
                            )
                        );
                    });
                },
                error => {
                    this.items = [];
                }
            )
        ;
    }
}
