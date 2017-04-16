/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A CMYK color specification */
		class CMYKColor extends Adobe.Photoshop.Color {
			/**
			 * the black color value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public black: number;
			/**
			 * the cyan color value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public cyan: number;
			/**
			 * the magenta color value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public magenta: number;
			/**
			 * the yellow color value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public yellow: number;
		}
	}
}