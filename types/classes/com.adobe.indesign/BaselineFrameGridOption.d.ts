/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class BaselineFrameGridOption extends Adobe.Indesign.Preference {
			/**
			 * The grid line color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public baselineFrameGridColor: any;
			/**
			 * The distance between grid lines.
			 * @type {any}
			 */
			public baselineFrameGridIncrement: any;
			/**
			 * The location (top of page, top margin, top of frame, or 
			 * frame inset) on which to base the custom baseline grid.
			 * @type {Adobe.Indesign.BaselineFrameGridRelativeOption}
			 */
			public baselineFrameGridRelativeOption: Adobe.Indesign.BaselineFrameGridRelativeOption;
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
			 * The parent of the BaselineFrameGridOption (a Application, 
			 * Document, TextFrame or ObjectStyle).
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
			 */
			public startingOffsetForBaselineFrameGrid: any;
			/**
			 * If true, uses a custom baseline frame grid.
			 * @type {boolean}
			 */
			public useCustomBaselineFrameGrid: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerBaselineFrameGridOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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