import { ProjectByOrganization, Project } from './../common/constants/projects-config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectsSort'
})
export class ProjectsSortPipe implements PipeTransform {

  transform(value: any, args?: string): Array<ProjectByOrganization> {
    if ( args === 'org') {
      value.sort((a: ProjectByOrganization, b: ProjectByOrganization) => {
        if (a.seperatedDate.getFullYear() > b.seperatedDate.getFullYear()) {
          return -1;
        } else if (a.seperatedDate.getFullYear() < b.seperatedDate.getFullYear()) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (args === 'project') {
      value.sort((a: Project, b: Project) => {
        if (a.endDate > b.endDate) {
          return -1;
        } else if (a.endDate < b.endDate) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return value;
  }

}
