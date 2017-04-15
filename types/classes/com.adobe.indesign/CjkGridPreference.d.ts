/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CjkGridPreference extends Adobe.Indesign.Preference {
			/**
			 * Applies the grid color to every nth cell, where n is the 
			 * value of this property.
			 */
			public colorEveryNthCell: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, uses ICF mode for grid cells. If false, uses 
			 * virtual body mode.
			 */
			public icfMode: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The layout grid color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator.
			 */
			public layoutGridColorIndex: any;
			/**
			 * The view magnification (as a percentage) less than which 
			 * grids do not appear. (Range: 5 to 4000)
			 */
			public minimumScale: number;
			/**
			 * The parent of the CjkGridPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, displays the frame (story) grids. */
			public showAllFrameGrids: boolean;
			/** If true, displays the layout grids. */
			public showAllLayoutGrids: boolean;
			/** If true, displays the character count for the frame. */
			public showCharacterCount: boolean;
			/**
			 * If true, applies the grid color from the the edge of the 
			 * line. If false, applies the grid color from the corner of 
			 * the frame.
			 */
			public singleLineColorMode: boolean;
			/** If true, objects snap to the layout grid. */
			public snapToLayoutGrid: boolean;
			/**
			 * If true, cell shape is circular. If false, cell shape is 
			 * rectangular.
			 */
			public useCircularCells: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerCjkGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerCjkGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}