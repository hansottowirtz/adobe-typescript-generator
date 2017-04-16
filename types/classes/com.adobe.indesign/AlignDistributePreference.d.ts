/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class AlignDistributePreference extends Adobe.Indesign.Preference {
			/**
			 * The bounds to use as a basis for aligning or distributing 
			 * page items.
			 * @type {Adobe.Indesign.AlignDistributeBounds}
			 */
			public alignDistributeBounds: Adobe.Indesign.AlignDistributeBounds;
			/**
			 * If true, distribute space between page items and ignore the 
			 * bounds setting.
			 * @type {boolean}
			 */
			public distributeAbsolute: boolean;
			/**
			 * The distance to use when distributing page items.
			 * @type {any}
			 */
			public distributeAbsoluteMeasurement: any;
			/**
			 * If true, distribute space between page items and ignore the 
			 * bounds setting.
			 * @type {boolean}
			 */
			public distributeSpaceAbsolute: boolean;
			/**
			 * The distance to use when distributing page items.
			 * @type {any}
			 */
			public distributeSpaceAbsoluteMeasurement: any;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the AlignDistributePreference (a Application).
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
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerAlignDistributePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerAlignDistributePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}