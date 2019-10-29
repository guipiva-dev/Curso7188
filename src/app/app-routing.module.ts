import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FramePage } from './pages/shared/frame/frame.page';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule' },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: FramePage,
    children: [
      { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
