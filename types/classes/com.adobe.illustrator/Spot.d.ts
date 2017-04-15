/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Spot extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			public color: Adobe.Illustrator.Color;
			/** Type of the custom color. */
			public colorType: Adobe.Illustrator.ColorModel;
			/** The custom color's name. */
			public name: string;
			/**
			 * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the 
			 * name of color kind contained in spot.
			 */
			public readonly spotKind: Adobe.Illustrator.SpotColorKind;
			/** Gets the internal color of a spot. */
			public getInternalColor(): any;
			/** delete the object */
			public remove(): void;
		}
	}
}