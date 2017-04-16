/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class BaselineFrameGridOption extends Adobe.Incopy.Preference {
			/**
			 * The grid line color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator.
			 * @type {any}
			 * @readonly
			 */
			public readonly baselineFrameGridColor: any;
			/**
			 * The distance between grid lines.
			 * @type {any}
			 * @readonly
			 */
			public readonly baselineFrameGridIncrement: any;
			/**
			 * The location (top of page, top margin, top of frame, or 
			 * frame inset) on which to base the custom baseline grid.
			 * @type {Adobe.Incopy.BaselineFrameGridRelativeOption}
			 * @readonly
			 */
			public readonly baselineFrameGridRelativeOption: Adobe.Incopy.BaselineFrameGridRelativeOption;
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
			 * The parent of the BaselineFrameGridOption (a Application, 
			 * Document or TextFrame).
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
			 * The amount to offset the baseline grid.
			 * @type {any}
			 * @readonly
			 */
			public readonly startingOffsetForBaselineFrameGrid: any;
			/**
			 * If true, uses a custom baseline frame grid.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly useCustomBaselineFrameGrid: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerBaselineFrameGridOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerBaselineFrameGridOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}