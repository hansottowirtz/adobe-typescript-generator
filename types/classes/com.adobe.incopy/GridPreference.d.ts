/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GridPreference extends Adobe.Incopy.Preference {
			/**
			 * The color of the baseline grid, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. . Can return: Array of 
			 * 3 Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public baselineColor: any;
			/**
			 * The amount of space between baseline grid lines.
			 * @type {any}
			 */
			public baselineDivision: any;
			/**
			 * If true, displays the baseline grid.
			 * @type {boolean}
			 */
			public baselineGridShown: boolean;
			/**
			 * The amount to offset the baseline grid from the zero point.
			 * @type {any}
			 */
			public baselineStart: any;
			/**
			 * The magnification (as a percentage) less than which ruler 
			 * guides do not appear. (Range: 5 to 4000)
			 * @type {number}
			 */
			public baselineViewThreshold: number;
			/**
			 * If true, displays the document grid.
			 * @type {boolean}
			 */
			public documentGridShown: boolean;
			/**
			 * If true, an object snaps to the nearest grid line when the 
			 * object is created, moved, or resized.
			 * @type {boolean}
			 */
			public documentGridSnapto: boolean;
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
			 * The color of the document grid, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public gridColor: any;
			/**
			 * If true, places grids behind all other objects on the 
			 * spread.
			 * @type {boolean}
			 */
			public gridsInBack: boolean;
			/**
			 * The amount of space between major horizontal lines in the 
			 * document grid.
			 * @type {any}
			 */
			public horizontalGridlineDivision: any;
			/**
			 * The number of rows into which to subdivide the space between 
			 * horizontal document grid lines.
			 * @type {number}
			 */
			public horizontalGridSubdivision: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the GridPreference (a Application or 
			 * Document).
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
			 * The amount of space between major vertical lines in the 
			 * document grid.
			 * @type {any}
			 */
			public verticalGridlineDivision: any;
			/**
			 * The number of columns into which to subdivide the space 
			 * between vertical document grid lines.
			 * @type {number}
			 */
			public verticalGridSubdivision: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}