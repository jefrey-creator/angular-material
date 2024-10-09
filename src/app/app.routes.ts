import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/content/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { VideosComponent } from './pages/content/videos/videos.component';
import { PlaylistsComponent } from './pages/content/playlists/playlists.component';
import { PostsComponent } from './pages/content/posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },

    {
        path: 'login',
        component: LoginComponent,
        title: "Sign in"
    },
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                component: SideNavComponent,
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                title: "Dashboard"
            },
            {
                path: 'content',
                component: ContentComponent,
                title: "Content",
                children:[
                    {
                        path: 'videos',
                        component: VideosComponent,
                        title: "Videos"
                    },
                    {
                        path: 'playlists',
                        component: PlaylistsComponent,
                        title: "Playlists"
                    },
                    {
                        path: 'posts',
                        component: PostsComponent,
                        title: "Posts"
                    }
                ]
            },
            {
                path: 'analytics',
                component: AnalyticsComponent,
                title: "Analytics"
            },
            {
                path: 'comments',
                component: CommentsComponent,
                title: "Comments"
            },
            
        ]
    }

    
];
