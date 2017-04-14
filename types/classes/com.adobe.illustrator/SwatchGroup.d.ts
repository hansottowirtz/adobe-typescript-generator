/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SwatchGroup extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Name of the swatch group. */
			public name: string;
			/** Add a spot swatch to the group. */
			public addSpot(spot: Spot): void;
			/** Add a swatch to the group. */
			public addSwatch(swatch: Swatch): void;
			/** Get all swatches in the swatch group. */
			public getAllSwatches(): any;
			/** delete the object */
			public remove(): void;
		}
	}
}