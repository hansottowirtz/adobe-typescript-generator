/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A Pattern color specification */
		class PatternColor extends Adobe.Illustrator.Color {
			/**
			 * additional transformation arising from manipulating the path
			 * @type {Adobe.Illustrator.Matrix}
			 */
			public matrix: Adobe.Illustrator.Matrix;
			/**
			 * @type {Adobe.Illustrator.Pattern}
			 */
			public pattern: Adobe.Illustrator.Pattern;
			/**
			 * whether or not the prototype is reflected before filling ( 
			 * default: false )
			 * @type {boolean}
			 */
			public reflect: boolean;
			/**
			 * the axis around which to reflect ( default: 0.0 )
			 * @type {number}
			 */
			public reflectAngle: number;
			/**
			 * the angle to rotate the before filling ( default: 0.0 )
			 * @type {number}
			 */
			public rotation: number;
			/**
			 * the fraction to scale the prototype before filling
			 * @type {any[]}
			 */
			public scaleFactor: any[];
			/**
			 * the angle to slant the shear by ( default: 0.0 )
			 * @type {number}
			 */
			public shearAngle: number;
			/**
			 * the axis to shear with respect to ( default: 0.0 )
			 * @type {number}
			 */
			public shearAxis: number;
			/**
			 * the angle to translate the (unscaled) prototype before 
			 * filling ( default: 0.0 )
			 * @type {number}
			 */
			public shiftAngle: number;
			/**
			 * the distance to translate the (unscaled) prototype before 
			 * filling ( default: 0.0 )
			 * @type {number}
			 */
			public shiftDistance: number;
		}
	}
}