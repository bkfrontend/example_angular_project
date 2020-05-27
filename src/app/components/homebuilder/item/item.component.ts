import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeBuilderItem } from '../../../services/home-builder-service';

@Component({
    selector: 'app-home-builder-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class HomebuilderItemComponent {
    @Input() item: HomeBuilderItem;
    @Output() onCompleted = new EventEmitter<HomeBuilderItem>();
    @Output() onUnCompleted = new EventEmitter<HomeBuilderItem>();

    public toggle(item: HomeBuilderItem) {
        (this.item.completed ? this.onUnCompleted.emit(item) : this.onCompleted.emit(item));
    }
}
