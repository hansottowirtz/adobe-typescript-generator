/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A Gradient color specification */
		class GradientColor extends Adobe.Illustrator.Color {
			/**
			 * the gradient vector angle ( default: 0.0 )
			 * @type {number}
			 */
			public angle: number;
			/**
			 * reference to the object defining the gradient
			 * @type {Adobe.Illustrator.Gradient}
			 */
			public gradient: Adobe.Illustrator.Gradient;
			/**
			 * the gradient hilite vector angle ( default: 0.0 )
			 * @type {number}
			 */
			public hiliteAngle: number;
			/**
			 * the gradient hilite vector length ( default: 0.0 )
			 * @type {number}
			 */
			public hiliteLength: number;
			/**
			 * the gradient vector length ( default: 0.0 )
			 * @type {number}
			 */
			public length: number;
			/**
			 * additional transformation arising from manipulating the path
			 * @type {Adobe.Illustrator.Matrix}
			 */
			public matrix: Adobe.Illustrator.Matrix;
			/**
			 * the gradient vector origin
			 * @type {any[]}
			 */
			public origin: any[];
		}
	}
}