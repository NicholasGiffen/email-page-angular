import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailsComponent } from './emails/emails.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParagraphChangeDirective } from './paragraph-change.directive';
import { OnHoverDirective } from './on-hover.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    EmailsComponent,
    NavBarComponent,
    ParagraphChangeDirective,
    OnHoverDirective,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //had to add the commas, since we added HttpClientModule below 
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
