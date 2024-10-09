import { Component, computed, Input, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';


export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MenuItemComponent,
    RouterOutlet
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlist',
          route: 'playlists',
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route: 'posts',
        }
      ]
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments'
    }
  ]);

  profilePictSize = computed( ()=> this.sideNavCollapsed() ? '29' : '100' )
}
