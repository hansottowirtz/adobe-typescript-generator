/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An HSB color specification */
		class HSBColor extends Adobe.Photoshop.Color {
			/**
			 * the brightness value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public brightness: number;
			/**
			 * the hue value (between 0.0 and 360.0)
			 * @type {number}
			 */
			public hue: number;
			/**
			 * the saturation value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public saturation: number;
		}
	}
}