/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LabColor extends Adobe.Photoshop.Color {
			/** the a-value (between -128.0 and 127.0) */
			public a: number;
			/** the b-value (between -128.0 and 127.0) */
			public b: number;
			/** the L-value (between 0.0 and 100.0) */
			public l: number;
		}
	}
}