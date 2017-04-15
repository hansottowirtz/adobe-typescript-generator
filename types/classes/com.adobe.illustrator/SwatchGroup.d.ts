/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A Swatch group. */
		class SwatchGroup extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Name of the swatch group. */
			public name: string;
			/**
			 * Add a spot swatch to the group.
			 * @param {Adobe.Illustrator.Spot} spot - The spot swatch to be 
			 * added to the group.
			 */
			public addSpot(spot: Adobe.Illustrator.Spot): void;
			/**
			 * Add a swatch to the group.
			 * @param {Adobe.Illustrator.Swatch} swatch - The swatch to be 
			 * added to the group.
			 */
			public addSwatch(swatch: Adobe.Illustrator.Swatch): void;
			/** Get all swatches in the swatch group. */
			public getAllSwatches(): any;
			/** delete the object */
			public remove(): void;
		}
	}
}