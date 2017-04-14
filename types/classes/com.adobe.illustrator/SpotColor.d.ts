/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SpotColor extends Color {
			public spot: Spot;
			/**
			 * percentage level of tint to be applied to the spot color ( 
			 * 0.0 - 100.0; default: 100.0 )
			 */
			public tint: number;
		}
	}
}