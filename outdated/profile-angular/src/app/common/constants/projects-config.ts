export class ProjectsConfig {
  projectByOrgs: Map<string, Array<ProjectByOrganization>>;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  personalProjects = new Map([
    [
      'japanese_dictionary', new Map([
        ['en', {
          name: 'NihongoAnki',
          path: '/projects/nihongoanki',
          description: 'to memorize japanese words'
        }],
        ['ja', {
          name: '日本語暗記',
          path: '/projects/nihongoanki',
          description: '日本語の言葉を暗記するためのアプリ'
        }]
      ])
    ]
  ]);



  constructor() {
    const enOrgs: Array<ProjectByOrganization> = [
      {
        organizationName: 'Fujitsu Consulting India',
        orgIcon: 'assets/images/experience/fujitsu-logo.png',
        joinedDate: new Date(2017, 9 - 1, 7),
        seperatedDate: new Date(2018, 5 - 1, 2),
        projects: [
          {
            name: 'Next Generation Banking',
            domain: 'Banking',
            client: 'Resona bank',
            startDate: new Date(2017, 9 - 1, 7),
            endDate: new Date(2018, 2 - 1, 28),
            description: `This is a angular application which was created for japan famous bank to
             implement SPA and Internationalization in their existing system with mobile and desktop support.
            `,
            technologies: [
              'Angular 5', 'Angular Material'
            ],
            responsibilities: [
              'Understanding the Project design and requirements',
              'interacting directly with the client',
              'Development and Testing'
            ],
            teamSize: 4,
            liveUrl: ''
          },
          {
            name: 'ISCC Automation',
            domain: '',
            client: 'Fujitsu',
            startDate: new Date(2018, 3 - 1, 1),
            endDate: new Date(2018, 5 - 1, 2),
            description: `This is an Internal Rest Application developed to reduce the manual work done by employees in Fujitsu.
            It's about assigning the tasks to agents whenever any work comes from ISCC(Japan) automatically and
            generating a report of agent work assignments`,
            technologies: [
              'JAVA 8', 'JAX-RS Jersey 2', 'Apache POI', 'Apache Commons', 'Task Scheduler'
            ],
            responsibilities: [
              'Understanding the Project design and requirements',
              'interacting directly with the client',
              'Development and Testing'
            ],
            teamSize: 4,
            liveUrl: ''
          },
        ]
      },
      {
        organizationName: 'SRM Technologies',
        orgIcon: 'assets/images/experience/logo-srm.png',
        joinedDate: new Date(2015, 8 - 1, 1),
        seperatedDate: new Date(2017, 8 - 1, 1),
        projects: [
          {
            name: 'FIP-MyPage',
            domain: 'Retail',
            client: 'Fujitsu Japan',
            startDate: new Date(2016, 6 - 1, 1),
            endDate: new Date(2016, 11 - 1, 1),
            description: `MyPage is an already developed project with the old Application Interface.
             Where the validation is done at the server side.
              Client wanted a user friendly interface without having any change in their business logic`,
            technologies: [
              'Struts 1', 'Apache Tiles', 'HTML5', 'CSS3', 'JQuery'
            ],
            responsibilities: [
              'Understanding the Project design and requirements',
              'interacting directly with the client',
              'Development and Testing'
            ],
            teamSize: 4,
            liveUrl: ''
          },
          {
            name: 'SRM University - CDC',
            domain: 'University Student’s Career Development',
            client: 'SRM University',
            startDate: new Date(2016, 11 - 1, 1),
            endDate: new Date(2017, 1 - 1, 1),
            description: `This system manages the implementation of SRM University student’s career development center module
             in an existing SRM university website with offline access of website information on any device`,
            technologies: [
              'Java 7', 'Restful Web Services', 'MySQL', 'Angular JS', 'HTML 5', 'CSS 3'
            ],
            responsibilities: [
              'Understanding the Project design and requirements',
              'Development and Testing'
            ],
            teamSize: 7,
            liveUrl: ''
          },
          {
            name: 'HOYA ',
            domain: 'Lens Maufacturing and Supplying',
            client: 'HOYA',
            startDate: new Date(2017, 2 - 1, 1),
            endDate: new Date(2017, 8 - 1, 1),
            description: `HOYA is a leading Lens Manufacturing company
             which is maintained by their HOYA NXG System. HOYA NXG contains
             various sub modules for placing Order, Manufacturing Lens,
              Inventory Maintenance, and Dispatch and so on.
               HOYA NXG is the enhancement project to develop their systems
                from domestic (Japan) to the global environment. In existing system
                 of Order sub module, the order placed will be handled in single
                  production place. In the proposed system of Order sub module,
                  the order placed will find their suitable place to manufacture the lens
                   based on their requirements and split it up their process
                   automatically based on their configurations.`,
            technologies: [
              'Java 1.6', 'Spring MVC', 'Hibernate', 'MySQL'
            ],
            responsibilities: [
              'Development and Testing',
              'Timely completion of the Module before the deadline'
            ],
            teamSize: 17,
            liveUrl: ''
          },
        ]
      },
    ];

    this.projectByOrgs = new Map([]);
    this.projectByOrgs.set('en', enOrgs);
    this.projectByOrgs.set('ja', this.convertToJa(enOrgs));

  }
  convertToJa(en: Array<ProjectByOrganization>): Array<ProjectByOrganization> {
    const jaOrgs = <Array<ProjectByOrganization>> this.deepCopy(en);
    // Fujitsu
    jaOrgs[0].organizationName = '富士通、インド';
    jaOrgs[0].projects[0].name = '次世代のバンキング';
    jaOrgs[0].projects[0].domain = 'バンキング';
    jaOrgs[0].projects[0].client = 'りそな銀行';
    jaOrgs[0].projects[0].description = `これは日本の有名な銀行のために作られたアプリケーションです
    既存のシステムでSPAと国際化を実装し、モバイルとデスクトップをサポートします`;
    jaOrgs[0].projects[0].responsibilities = [
      'プロジェクトの設計と要件の理解',
      'クライアントと直接対話する',
      '開発とテスト'
    ];
    jaOrgs[0].projects[1].name = 'ISCCオートメーション';
    jaOrgs[0].projects[1].client = '富士通';
    jaOrgs[0].projects[1].description = `これは富士通の従業員による手作業を減らすために開発された内部休憩アプリケーションです。
                 これは、ISCC（日本）からの仕事が自動的にエージェントに送られるたびにエージェントにタスクを割り当てることです。
                 エージェントワーク割り当てのレポートを生成する`;
    jaOrgs[0].projects[1].responsibilities = [
      'プロジェクトの設計と要件の理解',
      'クライアントと直接対話する',
      '開発とテスト'
    ];
    // SRM Technologies
    jaOrgs[1].organizationName = 'SRMテクノロジーズ、インド';
    jaOrgs[1].projects[0].name = 'マイページ';
    jaOrgs[1].projects[0].domain = '小売';
    jaOrgs[1].projects[0].client = '富士通、日本';
    jaOrgs[1].projects[0].description = `マイページは、古いアプリケーションインターフェイスを備えた既に開発されたプロジェクトです。
    検証はサーバー側で実行されていて、クライアントはビジネスロジックを変更することなくユーザーフレンドリーなインターフェースを求めていました`;
    jaOrgs[1].projects[0].responsibilities = [
      'プロジェクトの設計と要件の理解',
      'クライアントと直接対話する',
      '開発とテスト'
    ];
    return jaOrgs;
  }

  deepCopy(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null === obj || 'object' !== typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = this.deepCopy(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
              copy[attr] = this.deepCopy(obj[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy obj! Its type is not supported.');
}

}



export class ProjectByOrganization {
  organizationName: string;
  orgIcon: string;
  joinedDate: Date;
  seperatedDate: Date;
  projects: Array<Project>;
}

export class Project {
  name: string;
  domain: string;
  client: string;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: Array<string>;
  responsibilities: Array<string>;
  teamSize: number;
  liveUrl: string;
}



