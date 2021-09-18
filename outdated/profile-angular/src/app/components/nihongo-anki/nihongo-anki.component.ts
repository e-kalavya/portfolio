import { VocabService, Vocab } from './../../services/vocab.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, animate, style} from '@angular/animations';


@Component({
  selector: 'app-nihongo-anki',
  templateUrl: './nihongo-anki.component.html',
  styleUrls: ['./nihongo-anki.component.scss'],
  animations: [
    trigger('ShrinkExtractAnime', [
      transition('remove <=> add', animate('1s ease-in', style({transform: 'rotate(180deg)'})))
    ])
  ]
})
export class NihongoAnkiComponent implements OnInit {

  responseRecords: Array<Vocab>;
  filteredRecords: Array<Vocab>;
  index = 0;
  setting_state = 'remove';
  show_flashcard = true;
  designSettings = {
    spinnerColor: 'primary',
    colorOptions: ['primary', 'accent', 'warn'],
    showByOptionsError: false
  };
  card_settings = {
    availableGroups: ['All', 'Tangorin', 'Translate'],
    currentGroup: 'All',
    selectedGroupItems: [],
    allGroups: [
      {
        name: 'Tangorin',
        disabled: false,
        subgroups: []
      },
      {
        name: 'Translate',
        disabled: true,
        subgroups: [
          {value: 'charmander-6', viewValue: 'Charmander'}
        ],
        langFromTo: []
      }
    ],
    sortByOptions: ['Random', 'Latest', 'Old'],
    selectedSortBy: 'Random',
    showByOptions: [
      {
        name: 'Tangorin',
        items: [{name: 'Reading', isSelected: true}, {name: 'Writing', isSelected: true}, {name: 'Meaning', isSelected: true}]
      },
      {
      name: 'Translate',
      items: [{name: 'From', isSelected: true}, {name: 'To', isSelected: true}]
    }
  ]
  };

  constructor(private vocabService: VocabService) {
    this.responseRecords = [];
  }


  ngOnInit() {
    this.vocabService.getAllVocabs().subscribe( data => {
      this.responseRecords = data;
      this.filteredRecords = data;
      this.card_settings.allGroups[1].langFromTo = this.findUnique(this.responseRecords.filter(val => {
        return val.itemType === this.card_settings.availableGroups[2].toLowerCase();
      }).map((val, index, records) => {
        return [val.langFrom, val.langTo];
      }));
    });
    this.vocabService.getGroups().subscribe(val => {
      this.card_settings.allGroups[0].subgroups = val;
    });
  }

  findUnique(array: Array<any>) {
    const unique = [];
    for (let i = 0; i < array.length; i++) {
        if (!unique.some((val, index, arr) => {
          return array[i][0] === val[0] && array[i][1] === val[1];
        })) {
          unique.push(array[i]);
        }
    }
    return unique;
}

  changeIndex(type) {
    if (type === 'forward' && this.index < (this.responseRecords.length - 1 )) {
      this.index++;
    } else if (type === 'backward' && this.index > 0) {
      this.index--;
    }
  }

  checkOption(event, selectByGroup) {
    if (event.value === this.card_settings.availableGroups[1] || event.value === this.card_settings.availableGroups[2] ) {
      selectByGroup.disabled = false;
      selectByGroup.toggle();
    } else {
      this.card_settings.selectedGroupItems = [];
    }
  }

  validateFilterInputs(): boolean {
     let isErrorOccurs = false;
    this.card_settings.showByOptions.forEach(option => {
      if (!option.items.some((dataitem) => {
        return dataitem.isSelected;
      })) {
        this.designSettings.showByOptionsError = true;
        isErrorOccurs = true;
      }
    });
    if (!isErrorOccurs) {
      this.designSettings.showByOptionsError = false;
    }
    return isErrorOccurs ? false : true;
  }

  getFilteredData(settingsPanel) {
    if (this.validateFilterInputs()) {
      settingsPanel.close();
      this.show_flashcard = false;
      const spinnerColorChanger = setInterval(() => {
        this.designSettings.spinnerColor =
          this.designSettings.colorOptions[Math.floor(Math.random() * this.designSettings.colorOptions.length)];
      }, 300);
      // after getting response data, set show_flashcard to true and clear the interval
      if (this.card_settings.currentGroup === this.card_settings.availableGroups[0]) {
        this.filteredRecords = this.responseRecords;
      } else {
          const tempRecords = this.responseRecords.filter((val, index, records) => {
            return val.itemType === this.card_settings.currentGroup.toLowerCase();
          });
          let result = [];
          if (this.card_settings.currentGroup === this.card_settings.availableGroups[1]) {
            this.card_settings.selectedGroupItems.forEach(val => {
              result = tempRecords.filter((tempRe) => {
                return tempRe.groupIds.indexOf(val) !== -1;
              }).concat(result);
            });
          } else if (this.card_settings.currentGroup === this.card_settings.availableGroups[2]) {
            this.card_settings.selectedGroupItems.forEach(val => {
              result = tempRecords.filter((tempRe, i, arr) => {
                return tempRe.langFrom === val[0] && tempRe.langTo === val[1];
              }).concat(result);
            });
          }
          this.filteredRecords = result;
        }
      if (this.card_settings.selectedSortBy === this.card_settings.sortByOptions[0]) {
        this.filteredRecords = this.shuffle(this.filteredRecords);
      } else if (this.card_settings.selectedSortBy === this.card_settings.sortByOptions[1]) {
        this.filteredRecords = this.filteredRecords;
      } else if (this.card_settings.selectedSortBy === this.card_settings.sortByOptions[2]) {
        this.filteredRecords = this.filteredRecords.reverse();
      }
      setTimeout(() => {
        this.show_flashcard = true;
        clearInterval(spinnerColorChanger);
      }, 2000);
    }
  }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.changeIndex('forward');
    }
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.changeIndex('backward');
    }
  }

}

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
