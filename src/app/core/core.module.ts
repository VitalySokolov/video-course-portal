import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
