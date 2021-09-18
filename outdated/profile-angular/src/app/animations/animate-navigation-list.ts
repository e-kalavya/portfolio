import { trigger, state, transition, animate, stagger, query, style } from '@angular/animations';

export const AnimateNavigationList = trigger('AnimateNavigationList', [
    transition('void => test', [
        query(':enter', style({opacity: 0}), {optional: true})
    ])
]);
