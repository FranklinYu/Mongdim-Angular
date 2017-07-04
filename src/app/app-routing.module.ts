import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from 'app/item-list/item-list.component'
import { OauthComponent } from 'app/oauth/oauth.component'

const routes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  }, {
    path: 'oauth',
    component: OauthComponent
  }, {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
