/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PasteboardPreference extends Adobe.Indesign.Preference {
			/**
			 * The color of bleed guides, specified either as an array of 
			 * three doubles, each in the range 0 to 255, representing R, 
			 * G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public bleedGuideColor: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the PasteboardPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * The minimum horizontal and vertical pasteboard margins. A 
			 * horizontal margin of -1 means one document page width
			 */
			public pasteboardMargins: any;
			/**
			 * The color of the preview background, specified either as an 
			 * array of three doubles, each in the range 0 to 255, 
			 * representing R, G, and B values, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public previewBackgroundColor: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The color of slug guides, specified either as an array of 
			 * three doubles, each in the range 0 to 255, representing R, 
			 * G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public slugGuideColor: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPasteboardPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPasteboardPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}