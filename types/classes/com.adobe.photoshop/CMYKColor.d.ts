/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A CMYK color specification */
		class CMYKColor extends Adobe.Photoshop.Color {
			/** the black color value (between 0.0 and 100.0) */
			public black: number;
			/** the cyan color value (between 0.0 and 100.0) */
			public cyan: number;
			/** the magenta color value (between 0.0 and 100.0) */
			public magenta: number;
			/** the yellow color value (between 0.0 and 100.0) */
			public yellow: number;
		}
	}
}