/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Ink information */
		class InkInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the ink's screen angle (in degrees)
			 * @type {number}
			 */
			public angle: number;
			/**
			 * the color of the custom ink
			 * @type {Adobe.Illustrator.Color}
			 */
			public customColor: Adobe.Illustrator.Color;
			/**
			 * the neutral density ( minimum 0.0 )
			 * @type {number}
			 */
			public density: number;
			/**
			 * the dot shape name
			 * @type {string}
			 */
			public dotShape: string;
			/**
			 * the ink's frequency ( minimum 0.0 )
			 * @type {number}
			 */
			public frequency: number;
			/**
			 * the ink type
			 * @type {Adobe.Illustrator.InkType}
			 */
			public kind: Adobe.Illustrator.InkType;
			/**
			 * the ink printing status
			 * @type {Adobe.Illustrator.InkPrintStatus}
			 */
			public printingStatus: Adobe.Illustrator.InkPrintStatus;
			/**
			 * the trapping type
			 * @type {Adobe.Illustrator.TrappingType}
			 */
			public trapping: Adobe.Illustrator.TrappingType;
			/**
			 * the order of trapping for the ink ( minimum 1 )
			 * @type {number}
			 */
			public trappingOrder: number;
		}
	}
}