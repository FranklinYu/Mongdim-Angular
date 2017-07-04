import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { ItemListComponent } from 'app/item-list/item-list.component';
import { ItemService } from 'app/services/item.service';
import { OauthComponent } from 'app/oauth/oauth.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    OauthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
