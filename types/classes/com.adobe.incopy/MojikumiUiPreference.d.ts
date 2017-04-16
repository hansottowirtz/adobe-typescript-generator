/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class MojikumiUiPreference extends Adobe.Incopy.Preference {
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
			 * If true, uses full-width spacing for all characters.
			 * @type {boolean}
			 */
			public lineEndAllOneEm: boolean;
			/**
			 * If true, uses half-width spacing for all characters.
			 * @type {boolean}
			 */
			public lineEndAllOneHalfEm: boolean;
			/**
			 * If true, uses full-width spacing for punctuation and for the 
			 * last character in the line.
			 * @type {boolean}
			 */
			public lineEndPeriodOneEm: boolean;
			/**
			 * If true, uses line end uke no float.
			 * @type {boolean}
			 */
			public lineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one full space and uses no float for 
			 * all characters.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndAllNoFloat: boolean;
			/**
			 * If true, indents lines one full space and uses full-width 
			 * spacing for all characters.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndAllOneEm: boolean;
			/**
			 * If true, indents lines one full space and uses half-width 
			 * spacing for all characters.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndAllOneHalfEm: boolean;
			/**
			 * If true, indents lines one space and uses full-width spacing 
			 * for punctuation and for the last character in the line.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndPeriodOneEm: boolean;
			/**
			 * If true, indents lines one full space and uses line end uke 
			 * no float.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one space and uses line end uke one 
			 * half space.
			 * @type {boolean}
			 */
			public oneEmIndentLineEndUkeOneHalfEm: boolean;
			/**
			 * If true, Uses full-witdh spacing for all characters except 
			 * the last character in the line, which uses either full- or 
			 * half-width spacing.
			 * @type {boolean}
			 */
			public oneOrOneHalfEmIndentLineEndAllOneEm: boolean;
			/**
			 * If true, indents lines one or one-half space and uses 
			 * full-width spacing for punctuation and for the last 
			 * character in the line.
			 * @type {boolean}
			 */
			public oneOrOneHalfEmIndentLineEndPeriodOneEm: boolean;
			/**
			 * If true, indents lines one half space or one full space and 
			 * uses line end uke no float.
			 * @type {boolean}
			 */
			public oneOrOneHalfEmIndentLineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one full or half space and uses line 
			 * end uke one half space.
			 * @type {boolean}
			 */
			public oneOrOneHalfEmIndentLineEndUkeOneHalfEm: boolean;
			/**
			 * The parent of the MojikumiUiPreference (a Document or 
			 * Application).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMojikumiUiPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerMojikumiUiPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}