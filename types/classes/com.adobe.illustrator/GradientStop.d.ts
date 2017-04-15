/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A gradient stop. */
		class GradientStop extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The color linked to this gradient stop. */
			public color: Adobe.Illustrator.Color;
			/** Midpoint key value in percent. ( 13.0 - 87.0 ) */
			public midPoint: number;
			/**
			 * The opacity (between 0.0 and 100.0) value for the gradient 
			 * stop. ( 0.0 - 100.0 )
			 */
			public opacity: number;
			/** Location of color in the blend (in percent) ( 0.0 - 100.0 ) */
			public rampPoint: number;
			/** delete the object */
			public remove(): void;
		}
	}
}