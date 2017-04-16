/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A gradient */
		class Gradient extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The stops in this gradient
			 * @type {Adobe.Illustrator.GradientStops}
			 * @readonly
			 */
			public readonly gradientStops: Adobe.Illustrator.GradientStops;
			/**
			 * the gradient's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the gradient type
			 * @type {Adobe.Illustrator.GradientType}
			 */
			public type: Adobe.Illustrator.GradientType;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}