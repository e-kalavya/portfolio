export class AcademicConfig {
  academicDetails: Academic;

  constructor() {
    this.academicDetails = new Academic();
    this.academicDetails.courses = [
      {
        title: 'profile.academic.college.degree',
        description: 'profile.academic.college.description',
        icon: 'school',
        info: [
          {
            name: 'profile.academic.college.university-label',
            value: 'profile.academic.college.university',
            type: 'text'
          },
          {
            name: 'profile.academic.college.period-label',
            value: 'profile.academic.college.period',
            type: 'text'
          },
          {
            name: 'profile.academic.college.percentage-label',
            value: 'profile.academic.college.percentage',
            type: 'text'
          },
          {
            name: 'profile.academic.college.specialization-label',
            value: 'profile.academic.college.specialization',
            type: 'text'
          }
        ]
      },
      {
        title: 'profile.academic.hsc.degree',
        description: 'profile.academic.hsc.description',
        icon: 'school',
        info: [
          {
            name: 'profile.academic.hsc.university-label',
            value: 'profile.academic.hsc.university',
            type: 'text'
          },
          {
            name: 'profile.academic.hsc.period-label',
            value: 'profile.academic.hsc.period',
            type: 'text'
          },
          {
            name: 'profile.academic.hsc.percentage-label',
            value: 'profile.academic.hsc.percentage',
            type: 'text'
          },
          {
            name: 'profile.academic.hsc.specialization-label',
            value: 'profile.academic.hsc.specialization',
            type: 'text'
          }
        ]
      },
    ];
  }

}



export class Academic {
  courses: Array<Course>;
}

export class Course {
  title: string;
  description: string;
  icon: string;
  info: Array<CourseInfo>;
}

export class CourseInfo {
 name: string;
 value: string;
 type: string;
}
