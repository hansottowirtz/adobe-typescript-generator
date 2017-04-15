/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Gradient extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The stops in this gradient. */
			public readonly gradientStops: Adobe.Illustrator.GradientStops;
			/** The gradient's name. */
			public name: string;
			/** The gradient type. */
			public type: Adobe.Illustrator.GradientType;
			/** delete the object */
			public remove(): void;
		}
	}
}