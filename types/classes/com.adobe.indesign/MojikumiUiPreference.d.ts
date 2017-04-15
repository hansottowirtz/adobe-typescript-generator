/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class MojikumiUiPreference extends Adobe.Indesign.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** If true, uses full-width spacing for all characters. */
			public lineEndAllOneEm: boolean;
			/** If true, uses half-width spacing for all characters. */
			public lineEndAllOneHalfEm: boolean;
			/**
			 * If true, uses full-width spacing for punctuation and for the 
			 * last character in the line.
			 */
			public lineEndPeriodOneEm: boolean;
			/** If true, uses line end uke no float. */
			public lineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one full space and uses no float for 
			 * all characters.
			 */
			public oneEmIndentLineEndAllNoFloat: boolean;
			/**
			 * If true, indents lines one full space and uses full-width 
			 * spacing for all characters.
			 */
			public oneEmIndentLineEndAllOneEm: boolean;
			/**
			 * If true, indents lines one full space and uses half-width 
			 * spacing for all characters.
			 */
			public oneEmIndentLineEndAllOneHalfEm: boolean;
			/**
			 * If true, indents lines one space and uses full-width spacing 
			 * for punctuation and for the last character in the line.
			 */
			public oneEmIndentLineEndPeriodOneEm: boolean;
			/**
			 * If true, indents lines one full space and uses line end uke 
			 * no float.
			 */
			public oneEmIndentLineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one space and uses line end uke one 
			 * half space.
			 */
			public oneEmIndentLineEndUkeOneHalfEm: boolean;
			/**
			 * If true, Uses full-witdh spacing for all characters except 
			 * the last character in the line, which uses either full- or 
			 * half-width spacing.
			 */
			public oneOrOneHalfEmIndentLineEndAllOneEm: boolean;
			/**
			 * If true, indents lines one or one-half space and uses 
			 * full-width spacing for punctuation and for the last 
			 * character in the line.
			 */
			public oneOrOneHalfEmIndentLineEndPeriodOneEm: boolean;
			/**
			 * If true, indents lines one half space or one full space and 
			 * uses line end uke no float.
			 */
			public oneOrOneHalfEmIndentLineEndUkeNoFloat: boolean;
			/**
			 * If true, indents lines one full or half space and uses line 
			 * end uke one half space.
			 */
			public oneOrOneHalfEmIndentLineEndUkeOneHalfEm: boolean;
			/**
			 * The parent of the MojikumiUiPreference (a Document or 
			 * Application).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMojikumiUiPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMojikumiUiPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}