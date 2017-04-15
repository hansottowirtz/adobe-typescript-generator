/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GridPreference extends Adobe.Indesign.Preference {
			/**
			 * The color of the baseline grid, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. . Can return: Array of 
			 * 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public baselineColor: any;
			/** The amount of space between baseline grid lines. */
			public baselineDivision: any;
			/** The zero point for the baseline grid offset. */
			public baselineGridRelativeOption: Adobe.Indesign.BaselineGridRelativeOption;
			/** If true, displays the baseline grid. */
			public baselineGridShown: boolean;
			/** The amount to offset the baseline grid from the zero point. */
			public baselineStart: any;
			/**
			 * The magnification (as a percentage) less than which ruler 
			 * guides do not appear. (Range: 5 to 4000)
			 */
			public baselineViewThreshold: number;
			/** If true, displays the document grid. */
			public documentGridShown: boolean;
			/**
			 * If true, an object snaps to the nearest grid line when the 
			 * object is created, moved, or resized.
			 */
			public documentGridSnapto: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The color of the document grid, specified either as an array 
			 * of three doubles, each in the range 0 to 255, representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public gridColor: any;
			/**
			 * If true, places grids behind all other objects on the 
			 * spread.
			 */
			public gridsInBack: boolean;
			/**
			 * The amount of space between major horizontal lines in the 
			 * document grid.
			 */
			public horizontalGridlineDivision: any;
			/**
			 * The number of rows into which to subdivide the space between 
			 * horizontal document grid lines.
			 */
			public horizontalGridSubdivision: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the GridPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The amount of space between major vertical lines in the 
			 * document grid.
			 */
			public verticalGridlineDivision: any;
			/**
			 * The number of columns into which to subdivide the space 
			 * between vertical document grid lines.
			 */
			public verticalGridSubdivision: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerGridPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}