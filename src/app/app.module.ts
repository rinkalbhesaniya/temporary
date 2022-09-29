import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientsComponent } from './clients/clients.component';
import { BolgComponent } from './bolg/bolg.component';
import { HaveComponent } from './have/have.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WebComponent } from './web/web.component';
import { EducationComponent } from './education/education.component';
import { DevlopComponent } from './devlop/devlop.component';
import { IconsComponent } from './icons/icons.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ClientsComponent,
    BolgComponent,
    HaveComponent,
    AboutmeComponent,
    WebComponent,
    EducationComponent,
    DevlopComponent,
    IconsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
