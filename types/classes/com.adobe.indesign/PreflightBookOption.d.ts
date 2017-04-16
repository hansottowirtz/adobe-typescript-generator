/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PreflightBookOption extends Adobe.Indesign.Preference {
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
			 * The parent of the PreflightBookOption (a Application or 
			 * Book).
			 */
			public readonly parent: any;
			/**
			 * If true, include objects that do not print when 
			 * preflighting.
			 */
			public preflightIncludeNonprintingObjects: boolean;
			/** If true, include objects on pasteboard when preflighting. */
			public preflightIncludeObjectsOnPasteboard: boolean;
			/**
			 * The policy for preflighting applied when opening a document 
			 * or book, whether to use embedded profile or the another 
			 * profile when the preflight is turned on.
			 */
			public preflightProfilePolicy: Adobe.Indesign.PreflightProfileOptions;
			/**
			 * The pages or documents to preflight, specified either as an 
			 * enumeration or a string. To specify a range, separate page 
			 * numbers in the string with a hyphen (-). To specify separate 
			 * pages, separate page numbers in the string with a comma (,). 
			 * Can return: PreflightScopeOptions enumerator or String.
			 */
			public preflightScope: any;
			/** Which layers to preflight. */
			public preflightWhichLayers: Adobe.Indesign.PreflightLayerOptions;
			/**
			 * The working preflight profile. Can return: PreflightProfile 
			 * or String.
			 */
			public preflightWorkingProfile: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPreflightBookOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPreflightBookOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}