/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GradientColor extends Color {
			/** the gradient vector angle ( default: 0.0 ) */
			public angle: number;
			/** reference to the object defining the gradient */
			public gradient: Gradient;
			/** the gradient hilite vector angle ( default: 0.0 ) */
			public hiliteAngle: number;
			/** the gradient hilite vector length ( default: 0.0 ) */
			public hiliteLength: number;
			/** the gradient vector length ( default: 0.0 ) */
			public length: number;
			/**
			 * additional transformation arising from manipulating the path
			 */
			public matrix: Matrix;
			/** the gradient vector origin */
			public origin: any[];
		}
	}
}