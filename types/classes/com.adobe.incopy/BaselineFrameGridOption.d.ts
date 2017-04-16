/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class BaselineFrameGridOption extends Adobe.Incopy.Preference {
			/**
			 * The grid line color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator.
			 */
			public readonly baselineFrameGridColor: any;
			/** The distance between grid lines. */
			public readonly baselineFrameGridIncrement: any;
			/**
			 * The location (top of page, top margin, top of frame, or 
			 * frame inset) on which to base the custom baseline grid.
			 */
			public readonly baselineFrameGridRelativeOption: Adobe.Incopy.BaselineFrameGridRelativeOption;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the BaselineFrameGridOption (a Application, 
			 * Document or TextFrame).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The amount to offset the baseline grid. */
			public readonly startingOffsetForBaselineFrameGrid: any;
			/** If true, uses a custom baseline frame grid. */
			public readonly useCustomBaselineFrameGrid: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerBaselineFrameGridOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerBaselineFrameGridOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}