



/* Validates that the confirm password matches the entered password */

import { Polymer, html } from '@polymer/polymer/polymer-legacy.js';

import "../iron-validator-behavior/iron-validator-behavior.html"

const template = html`
`;
Polymer({
    is: 'match-passwords-validator',
    properties: {
        /**
         * Entered password
         */
        password: String
    },
    behaviors: [
        Polymer.IronValidatorBehavior
    ],

    validate: function (value) {
        // Ignore if no confirm password was entered
        return !value || value === this.password;
    }
});

