import { Component, computed, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from "../side-nav/side-nav.component";
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatSidenavModule,
    SideNavComponent,
    MatMenuModule
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  collapsed = signal(false);
  sidenavWidth = computed(()=>this.collapsed() ? '60px' : '250px');
}
