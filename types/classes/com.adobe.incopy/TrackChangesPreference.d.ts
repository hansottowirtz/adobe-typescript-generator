/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class TrackChangesPreference extends Adobe.Incopy.Preference {
			/**
			 * The background color option for added text.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 */
			public addedBackgroundColorChoice: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * The color option for added text.
			 * @type {Adobe.Incopy.ChangeTextColorChoices}
			 */
			public addedTextColorChoice: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * The background color for added text, specified as an InCopy 
			 * UI color. Note: Valid only when added background color 
			 * choice is change background uses change pref color. Can 
			 * return: Array of 3 Reals (0 - 255) or InCopyUIColors 
			 * enumerator.
			 * @type {any}
			 */
			public backgroundColorForAddedText: any;
			/**
			 * The background color for deleted text, specified as an 
			 * InCopy UI color. Note: Valid only when deleted background 
			 * color choice is change background uses change pref color. 
			 * Can return: Array of 3 Reals (0 - 255) or InCopyUIColors 
			 * enumerator.
			 * @type {any}
			 */
			public backgroundColorForDeletedText: any;
			/**
			 * The background color for moved text, specified as an InCopy 
			 * UI color. Note: Valid only when moved background color 
			 * choice is change background uses change pref color. Can 
			 * return: Array of 3 Reals (0 - 255) or InCopyUIColors 
			 * enumerator.
			 * @type {any}
			 */
			public backgroundColorForMovedText: any;
			/**
			 * The change bar color, specified as an InCopy UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or InCopyUIColors 
			 * enumerator.
			 * @type {any}
			 */
			public changeBarColor: any;
			/**
			 * The background color option for deleted text.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 */
			public deletedBackgroundColorChoice: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * The color option for deleted text.
			 * @type {Adobe.Incopy.ChangeTextColorChoices}
			 */
			public deletedTextColorChoice: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The change bar location.
			 * @type {Adobe.Incopy.ChangebarLocations}
			 */
			public locationForChangeBar: Adobe.Incopy.ChangebarLocations;
			/**
			 * The marking that identifies added text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 */
			public markingForAddedText: Adobe.Incopy.ChangeMarkings;
			/**
			 * The marking that identifies deleted text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 */
			public markingForDeletedText: Adobe.Incopy.ChangeMarkings;
			/**
			 * The marking that identifies moved text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 */
			public markingForMovedText: Adobe.Incopy.ChangeMarkings;
			/**
			 * The background color option for moved text.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 */
			public movedBackgroundColorChoice: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * The color option for moved text.
			 * @type {Adobe.Incopy.ChangeTextColorChoices}
			 */
			public movedTextColorChoice: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * The parent of the TrackChangesPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, prevent duplicate user color for tracked changes 
			 * background color.
			 * @type {boolean}
			 */
			public preventDuplicateColor: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, displays added text.
			 * @type {boolean}
			 */
			public showAddedText: boolean;
			/**
			 * If true, displays change bars,
			 * @type {boolean}
			 */
			public showChangeBars: boolean;
			/**
			 * If true, displays deleted text.
			 * @type {boolean}
			 */
			public showDeletedText: boolean;
			/**
			 * If true, displays moved text.
			 * @type {boolean}
			 */
			public showMovedText: boolean;
			/**
			 * If true, includes deleted text when using the Spell Check 
			 * command.
			 * @type {boolean}
			 */
			public spellCheckDeletedText: boolean;
			/**
			 * The color for added text, specified as an InCopy UI color. 
			 * Note: Valid only when added text color choice is change uses 
			 * change pref color. Can return: Array of 3 Reals (0 - 255) or 
			 * InCopyUIColors enumerator.
			 * @type {any}
			 */
			public textColorForAddedText: any;
			/**
			 * The color for deleted text, specified as an InCopy UI color. 
			 * Note: Valid only when deleted text color choice is change 
			 * uses change pref color. Can return: Array of 3 Reals (0 - 
			 * 255) or InCopyUIColors enumerator.
			 * @type {any}
			 */
			public textColorForDeletedText: any;
			/**
			 * The color for moved text, specified as an InCopy UI color. 
			 * Note: Valid only when moved text color choice is change uses 
			 * change pref color. Can return: Array of 3 Reals (0 - 255) or 
			 * InCopyUIColors enumerator.
			 * @type {any}
			 */
			public textColorForMovedText: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerTrackChangesPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerTrackChangesPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}