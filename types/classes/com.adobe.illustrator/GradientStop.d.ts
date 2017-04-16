/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A gradient stop */
		class GradientStop extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color linked to this gradient stop
			 * @type {Adobe.Illustrator.Color}
			 */
			public color: Adobe.Illustrator.Color;
			/**
			 * midpoint key value in percent ( 13.0 - 87.0 )
			 * @type {number}
			 */
			public midPoint: number;
			/**
			 * The opacity (between 0.0 and 100.0) value for the gradient 
			 * stop ( 0.0 - 100.0 )
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * location of color in the blend (in percent) ( 0.0 - 100.0 )
			 * @type {number}
			 */
			public rampPoint: number;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}