import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  { path: '', redirectTo: 'app-tab1', pathMatch: 'full' },
  { path: 'app-tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'app-tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'app-tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
