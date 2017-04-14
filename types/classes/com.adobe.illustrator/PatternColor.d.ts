/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PatternColor extends Color {
			/**
			 * whether or not the prototype is reflected before filling ( 
			 * default: false )
			 */
			public _reflect: boolean;
			/**
			 * additional transformation arising from manipulating the path
			 */
			public matrix: Matrix;
			public pattern: Pattern;
			/** the axis around which to reflect ( default: 0.0 ) */
			public reflectAngle: number;
			/** the angle to rotate the before filling ( default: 0.0 ) */
			public rotation: number;
			/** the fraction to scale the prototype before filling */
			public scaleFactor: any[];
			/** the angle to slant the shear by ( default: 0.0 ) */
			public shearAngle: number;
			/** the axis to shear with respect to ( default: 0.0 ) */
			public shearAxis: number;
			/**
			 * the angle to translate the (unscaled) prototype before 
			 * filling ( default: 0.0 )
			 */
			public shiftAngle: number;
			/**
			 * the distance to translate the (unscaled) prototype before 
			 * filling ( default: 0.0 )
			 */
			public shiftDistance: number;
		}
	}
}