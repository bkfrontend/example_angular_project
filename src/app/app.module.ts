import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { AppComponent } from './components/application/app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { _404Component } from './components/404/404.component';
import { HomebuilderComponent } from './components/homebuilder/homebuilder.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HomebuilderItemComponent } from './components/homebuilder/item/item.component';
import { HomeBuilderService } from './services/home-builder-service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        DashboardComponent,
        ActivityComponent,
        HomebuilderComponent,
        HomebuilderItemComponent,
        _404Component
    ],
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HomeBuilderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
