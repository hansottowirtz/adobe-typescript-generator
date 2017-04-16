/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A CMYK color specification */
		class CMYKColor extends Adobe.Illustrator.Color {
			/**
			 * the black color value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 * @type {number}
			 */
			public black: number;
			/**
			 * the cyan color value (between 0.0 and 100.0) ( 0.0 - 100.0; 
			 * default: 0.0 )
			 * @type {number}
			 */
			public cyan: number;
			/**
			 * the magenta color value (between 0.0 and 100.0) ( 0.0 - 
			 * 100.0; default: 0.0 )
			 * @type {number}
			 */
			public magenta: number;
			/**
			 * the yellow color value (between 0.0 and 100.0) ( 0.0 - 
			 * 100.0; default: 0.0 )
			 * @type {number}
			 */
			public yellow: number;
		}
	}
}