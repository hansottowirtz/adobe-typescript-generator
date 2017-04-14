/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Gradient extends IllustratorHostObject {
			/** The stops in this gradient. */
			public readonly gradientStops: GradientStops;
			/** The gradient's name. */
			public name: string;
			/** The gradient type. */
			public type: GradientType;
			/** delete the object */
			public remove(): void;
		}
	}
}