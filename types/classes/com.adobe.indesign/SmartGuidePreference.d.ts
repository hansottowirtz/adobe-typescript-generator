/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class SmartGuidePreference extends Adobe.Indesign.Preference {
			/** If true, smart alignment to object centers is enabled. */
			public alignToObjectCenter: boolean;
			/** If true, smart alignment to object edges is enabled. */
			public alignToObjectEdges: boolean;
			/** If true, smart guides are enabled. */
			public enabled: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The color of the guide, specified either as an array of 
			 * three doubles, each in the range 0 to 255 and representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public guideColor: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the SmartGuidePreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, smart dimensions guides are enabled. */
			public smartDimensions: boolean;
			/** If true, smart spacing guides are enabled. */
			public smartSpacing: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerSmartGuidePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerSmartGuidePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}