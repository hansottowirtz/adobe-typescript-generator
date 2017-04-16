/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class TransformPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, strokes are scaled when objects are scaled.
			 * @type {boolean}
			 */
			public adjustStrokeWeightWhenScaling: boolean;
			/**
			 * If true, includes the stroke weight when displaying object 
			 * dimensions. If false, measures objects from the path or 
			 * frame.
			 * @type {boolean}
			 */
			public dimensionsIncludeStrokeWeight: boolean;
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
			 * The parent of the TransformPreference (a Application).
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
			 * If true, measures the x and y values of the object relative 
			 * to the containing frame. If false, measures the x and y 
			 * values relative to the rulers.
			 * @type {boolean}
			 */
			public showContentOffset: boolean;
			/**
			 * If true, transformation values are relative to the parent 
			 * object. If false, the transformation values are absolute 
			 * values.
			 * @type {boolean}
			 */
			public transformationsAreTotals: boolean;
			/**
			 * The method used to scale a page item.
			 * @type {Adobe.Indesign.WhenScalingOptions}
			 */
			public whenScaling: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTransformPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerTransformPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}