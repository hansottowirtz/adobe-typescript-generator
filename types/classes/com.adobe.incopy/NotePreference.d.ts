/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class NotePreference extends Adobe.Incopy.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, includes inline notes content when using 
			 * Find/Change commands (in Galley and Story views only).
			 */
			public findAndReplaceNoteContents: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The background color for notes. */
			public noteBackgroundColor: Adobe.Incopy.NoteBackgrounds;
			/**
			 * The note color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. Can return: Array of 
			 * 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 */
			public noteColor: any;
			/** The color to use for notes. */
			public noteColorChoices: Adobe.Incopy.NoteColorChoices;
			/** The parent of the NotePreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, displays note information and some note content 
			 * when the mouse pointer hovers over a note anchor in layout 
			 * view or a note bookend in galley or story view.
			 */
			public showNoteTips: boolean;
			/**
			 * If true, includes inline notes content when using Spell 
			 * Check (in Galley and Story views only).
			 */
			public spellCheckNotes: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerNotePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerNotePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}