import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

const TREE_DATA: FlatNode[] = [
  {
    name: 'DevOps',
    expandable: true,
    level: 0
  },
  {
    name: 'AWS',
    expandable: false,
    level: 1
  },
  {
    name: 'Docker',
    expandable: false,
    level: 1
  },
  {
    name: 'Terraform',
    expandable: false,
    level: 1
  },
  {
    name: 'Programming',
    expandable: true,
    level: 0
  },
  {
    name: 'Backend',
    expandable: true,
    level: 1
  },
  {
    name: 'Languages',
    expandable: true,
    level: 2
  },
  {
    name: 'Java',
    expandable: false,
    level: 3
  },
  {
    name: 'NodeJS',
    expandable: false,
    level: 3
  },
  {
    name: 'GoLang',
    expandable: false,
    level: 3
  },
  {
    name: 'Kotlin',
    expandable: false,
    level: 3
  },
  {
    name: 'Dart',
    expandable: false,
    level: 3
  },
  {
    name: 'Frameworks',
    expandable: true,
    level: 2
  },
  {
    name: 'Spring Boot',
    expandable: false,
    level: 3
  },
  {
    name: 'Hibernate',
    expandable: false,
    level: 3
  },
  {
    name: 'ExpressJS',
    expandable: false,
    level: 3
  },
  {
    name: 'Electron',
    expandable: false,
    level: 3
  },
  {
    name: 'Frontend',
    expandable: true,
    level: 1
  },
  {
    name: 'Languages',
    expandable: true,
    level: 2
  },
  {
    name: 'JavaScript',
    expandable: false,
    level: 3
  },
  {
    name: 'TypeScript',
    expandable: false,
    level: 3
  },
  {
    name: 'HTML',
    expandable: false,
    level: 3
  },
  {
    name: 'CSS',
    expandable: false,
    level: 3
  },
  {
    name: 'SCSS',
    expandable: false,
    level: 3
  },
  {
    name: 'Frameworks',
    expandable: true,
    level: 2
  },
  {
    name: 'Angular',
    expandable: false,
    level: 3
  },
  {
    name: 'Vue',
    expandable: false,
    level: 3
  },
  {
    name: 'Flutter',
    expandable: false,
    level: 3
  },
  {
    name: 'Ionic',
    expandable: false,
    level: 3
  },
  {
    name: 'Shell',
    expandable: true,
    level: 1
  },
  {
    name: 'Windows Powershell',
    expandable: false,
    level: 2
  },
  {
    name: 'Shell script',
    expandable: false,
    level: 2
  },
  {
    name: 'VB script',
    expandable: false,
    level: 2
  },

  {
    name: 'Domain',
    expandable: true,
    level: 0
  },
  {
    name: 'Blockchain',
    expandable: true,
    level: 1
  },
  {
    name: 'Bitcoin',
    expandable: false,
    level: 2
  },
  {
    name: 'Ethereum',
    expandable: false,
    level: 2
  },
  {
    name: 'Hyperledger',
    expandable: false,
    level: 2
  },
  {
    name: 'Finance(Banking & Stocks)',
    expandable: false,
    level: 1
  },
  {
    name: 'Retail',
    expandable: false,
    level: 1
  },
  {
    name: 'Mobile Application',
    expandable: false,
    level: 1
  }
];

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  dataSource = new ArrayDataSource(TREE_DATA);
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  constructor() {}

  ngOnInit() {}

  hasChild = (_: number, node: FlatNode) => node.expandable;

  getParentNode(node: FlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }
    return null;
  }

  shouldRender(node: FlatNode) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}
