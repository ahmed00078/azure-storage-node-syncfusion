import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
import { FileManagerComponent, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileManagerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NavigationPaneService, ToolbarService, DetailsViewService]
})
export class AppComponent implements OnInit {
  public ajaxSettings: Object | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {

    // Configure FileManager ajaxSettings
    this.ajaxSettings = {
      url: 'http://localhost:3000/',
      downloadUrl: 'http://localhost:3000/Download',
      uploadUrl: 'http://localhost:3000/Upload',
      getImageUrl: 'http://localhost:3000/GetImage'
    };    
  }
}