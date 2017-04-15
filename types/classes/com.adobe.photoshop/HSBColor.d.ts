/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class HSBColor extends Adobe.Photoshop.Color {
			/** the brightness value (between 0.0 and 100.0) */
			public brightness: number;
			/** the hue value (between 0.0 and 360.0) */
			public hue: number;
			/** the saturation value (between 0.0 and 100.0) */
			public saturation: number;
		}
	}
}