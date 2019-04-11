import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Nhungưng cái này là Angular tự chêm vô
 
// Cứ mỗi lần generate a component thì angular sẽ auto add this component vào this file.

@NgModule({
  declarations: [ //  Định nghĩa tất cả các component sẽ được dùng trong module này. Nếu chưa định nghĩa thì các component trong module sẽ không thể gọi nhau vì không tìm thấy nhao.
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ // Định nghĩa sự phụ thuộc (Dependency) của module này, module phụ thuộc sẽ được load trước rồi module này mới load.
    BrowserModule,
    AppRoutingModule, // Nhớ phải import
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [], // service
  bootstrap: [AppComponent] // Mỗi ứng dụng Angular đều cần một module gốc, module này sẽ có một component gốc chứa layout gốc sẽ được render ra ở file index.html.
})
export class AppModule { }