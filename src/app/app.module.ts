import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageStartComponent } from './page-start/page-start.component';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { UiService } from './services/ui.service';
import { DataService } from './services/data.service';
import { MapService } from './services/map.service';

import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { FilterComponent } from './filter/filter.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { DropdownFilterComponent } from './dropdown-filter/dropdown-filter.component';
import { DropdownFilterService } from './dropdown-filter/dropdown-filter.service';
import { FormsModule } from '@angular/forms';
import { MapBoxSimpleMarkerComponent } from './mapbox-simple-marker/mapbox-simple-marker.component';
import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageBallooramaComponent } from './page-balloorama/page-balloorama.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageTechComponent } from './page-tech/page-tech.component';
import { PageFriendsComponent } from './page-friends/page-friends.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    PageStartComponent,
    FooterComponent,
    NavComponent,
    FilterComponent,
    IconFilterComponent,
    InfoboxComponent,
    BottomRightComponent,
    DropdownFilterComponent,
    MapBoxSimpleMarkerComponent,
    PageIntroComponent,
    PageBallooramaComponent,
    PageAboutComponent,
    PageTechComponent,
    PageFriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
        }
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UiService, DataService, MapService, DropdownFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
