import { trigger, state, transition, style, query, stagger, keyframes, animate } from '@angular/animations';

export const profileHomeIntroAnimation = trigger('ProfileHomeIntroAnimation',[
    transition('* => *', [
        query('.home-content .intro-text', style({ opacity: 0})),
        query('.home-content .profile-image img', style({ opacity: 0}), { optional: true}),
        query('.home-content .intro-text', animate('500ms', keyframes([
            style({opacity: 1, transform: 'scale(0.5)', offset: .5}),
            style({opacity: 1, transform: 'scale(1)', offset: 1})
        ]))),
        query('.home-content .profile-image img', animate('500ms', keyframes([
            style({opacity: 0, transform: 'scale(0)', offset: 0}),
            style({opacity: .7, transform: 'scale(1.5)', offset: .5}),
            style({opacity: 1, transform: 'scale(1)', offset: 1})
        ])), { optional: true}),
        
    ])
]);