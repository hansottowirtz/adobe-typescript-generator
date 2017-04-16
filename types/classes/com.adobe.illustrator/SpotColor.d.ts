/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Information about the spot color */
		class SpotColor extends Adobe.Illustrator.Color {
			public spot: Adobe.Illustrator.Spot;
			/**
			 * percentage level of tint to be applied to the spot color ( 
			 * 0.0 - 100.0; default: 100.0 )
			 */
			public tint: number;
		}
	}
}