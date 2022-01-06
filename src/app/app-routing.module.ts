import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectAccessGuard } from './direct-access-guard.service';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    redirectTo: '/register' 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'review', 
    component: ReviewComponent,
    canActivate: [DirectAccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
