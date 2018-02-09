import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article.list.component';
import { ArticleEditComponent } from './article-list/edit/article.edit.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';

const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: 'list',
        component: ArticleListComponent,
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: ':id',
            component: ArticleEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
