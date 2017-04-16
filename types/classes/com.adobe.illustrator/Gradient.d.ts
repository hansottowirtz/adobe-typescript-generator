/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A gradient */
		class Gradient extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The stops in this gradient */
			public readonly gradientStops: Adobe.Illustrator.GradientStops;
			/** the gradient's name */
			public name: string;
			/** the gradient type */
			public type: Adobe.Illustrator.GradientType;
			/** delete the object */
			public remove(): void;
		}
	}
}