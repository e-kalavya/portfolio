import { Router } from '@angular/router';
import { I18n } from './../../common/constants/i18n';
import { TranslateService } from '@ngx-translate/core';
import { ProjectsConfig, Project } from './../../common/constants/projects-config';
import { ProfileProjectInfoComponent } from './../profile-project-info/profile-project-info.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss'],
})
export class ProfileProjectsComponent implements OnInit {

  projectsConfig = new ProjectsConfig();
  languages = I18n.languages;
  constructor(private dialog: MatDialog, public i18n: TranslateService, private router: Router) { }

  ngOnInit() {
  }

  openProjectInfo(proj: Project) {
    const dialogRef = this.dialog.open(ProfileProjectInfoComponent, {
      width: '300px',
      height: '300px',
      data: {project: proj}
    });
  }

  openPersonalProject(path) {
    this.router.navigate([path]);
  }

}
