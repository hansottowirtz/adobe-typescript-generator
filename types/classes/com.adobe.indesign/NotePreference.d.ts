/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class NotePreference extends Adobe.Indesign.Preference {
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, includes inline notes content when using 
			 * Find/Change commands (in Galley and Story views only).
			 * @type {boolean}
			 */
			public findAndReplaceNoteContents: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The background color for notes.
			 * @type {Adobe.Indesign.NoteBackgrounds}
			 */
			public noteBackgroundColor: Adobe.Indesign.NoteBackgrounds;
			/**
			 * The note color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. Can return: Array of 
			 * 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 * @type {any}
			 */
			public noteColor: any;
			/**
			 * The color to use for notes.
			 * @type {Adobe.Indesign.NoteColorChoices}
			 */
			public noteColorChoices: Adobe.Indesign.NoteColorChoices;
			/**
			 * The parent of the NotePreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, displays note information and some note content 
			 * when the mouse pointer hovers over a note anchor in layout 
			 * view or a note bookend in galley or story view.
			 * @type {boolean}
			 */
			public showNoteTips: boolean;
			/**
			 * If true, includes inline notes content when using Spell 
			 * Check (in Galley and Story views only).
			 * @type {boolean}
			 */
			public spellCheckNotes: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerNotePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerNotePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}