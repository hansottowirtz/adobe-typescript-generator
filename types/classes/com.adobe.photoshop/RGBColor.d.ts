/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class RGBColor extends Adobe.Photoshop.Color {
			/** the blue color value ( 0.0 - 255.0; default: 255.0 ) */
			public blue: number;
			/** the green color value ( 0.0 - 255.0; default: 255.0 ) */
			public green: number;
			/** Hex representation of this color */
			public hexValue: string;
			/** the red color value ( 0.0 - 255.0; default: 255.0 ) */
			public red: number;
		}
	}
}