/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class AlignDistributePreference extends Adobe.Indesign.Preference {
			/**
			 * The bounds to use as a basis for aligning or distributing 
			 * page items.
			 */
			public alignDistributeBounds: Adobe.Indesign.AlignDistributeBounds;
			/**
			 * If true, distribute space between page items and ignore the 
			 * bounds setting.
			 */
			public distributeAbsolute: boolean;
			/** The distance to use when distributing page items. */
			public distributeAbsoluteMeasurement: any;
			/**
			 * If true, distribute space between page items and ignore the 
			 * bounds setting.
			 */
			public distributeSpaceAbsolute: boolean;
			/** The distance to use when distributing page items. */
			public distributeSpaceAbsoluteMeasurement: any;
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
			 * The parent of the AlignDistributePreference (a Application).
			 */
			public readonly parent: any;
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
			public addEventListenerAlignDistributePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerAlignDistributePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}