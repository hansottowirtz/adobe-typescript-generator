/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class TransformPreference extends Adobe.Indesign.Preference {
			/** If true, strokes are scaled when objects are scaled. */
			public adjustStrokeWeightWhenScaling: boolean;
			/**
			 * If true, includes the stroke weight when displaying object 
			 * dimensions. If false, measures objects from the path or 
			 * frame.
			 */
			public dimensionsIncludeStrokeWeight: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the TransformPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, measures the x and y values of the object relative 
			 * to the containing frame. If false, measures the x and y 
			 * values relative to the rulers.
			 */
			public showContentOffset: boolean;
			/**
			 * If true, transformation values are relative to the parent 
			 * object. If false, the transformation values are absolute 
			 * values.
			 */
			public transformationsAreTotals: boolean;
			/** The method used to scale a page item. */
			public whenScaling: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTransformPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerTransformPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}