/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class CjkGridPreference extends Adobe.Indesign.Preference {
			/**
			 * Applies the grid color to every nth cell, where n is the 
			 * value of this property.
			 * @type {number}
			 */
			public colorEveryNthCell: number;
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
			 * If true, uses ICF mode for grid cells. If false, uses 
			 * virtual body mode.
			 * @type {boolean}
			 */
			public icfMode: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The layout grid color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public layoutGridColorIndex: any;
			/**
			 * The view magnification (as a percentage) less than which 
			 * grids do not appear. (Range: 5 to 4000)
			 * @type {number}
			 */
			public minimumScale: number;
			/**
			 * The parent of the CjkGridPreference (a Application or 
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
			 * If true, displays the frame (story) grids.
			 * @type {boolean}
			 */
			public showAllFrameGrids: boolean;
			/**
			 * If true, displays the layout grids.
			 * @type {boolean}
			 */
			public showAllLayoutGrids: boolean;
			/**
			 * If true, displays the character count for the frame.
			 * @type {boolean}
			 */
			public showCharacterCount: boolean;
			/**
			 * If true, applies the grid color from the the edge of the 
			 * line. If false, applies the grid color from the corner of 
			 * the frame.
			 * @type {boolean}
			 */
			public singleLineColorMode: boolean;
			/**
			 * If true, objects snap to the layout grid.
			 * @type {boolean}
			 */
			public snapToLayoutGrid: boolean;
			/**
			 * If true, cell shape is circular. If false, cell shape is 
			 * rectangular.
			 * @type {boolean}
			 */
			public useCircularCells: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerCjkGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerCjkGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}