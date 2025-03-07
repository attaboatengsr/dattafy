import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    
    {path:'', component: BioComponent},
    {path:'blog', component: BlogComponent},
    {path:'projects', component: ProjectsComponent}

];
