/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A custom color */
		class Spot extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * @type {Adobe.Illustrator.Color}
			 */
			public color: Adobe.Illustrator.Color;
			/**
			 * Type of the custom color
			 * @type {Adobe.Illustrator.ColorModel}
			 */
			public colorType: Adobe.Illustrator.ColorModel;
			/**
			 * The custom color's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the 
			 * name of color kind contained in spot
			 * @type {Adobe.Illustrator.SpotColorKind}
			 * @readonly
			 */
			public readonly spotKind: Adobe.Illustrator.SpotColorKind;
			/**
			 * Gets the internal color of a spot.
			 * @returns {any[]}
			 */
			public getInternalColor(): any[];
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}