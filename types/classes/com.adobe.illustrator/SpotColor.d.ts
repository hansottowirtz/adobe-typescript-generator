/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Information about the spot color */
		class SpotColor extends Adobe.Illustrator.Color {
			/**
			 * @type {Adobe.Illustrator.Spot}
			 */
			public spot: Adobe.Illustrator.Spot;
			/**
			 * percentage level of tint to be applied to the spot color ( 
			 * 0.0 - 100.0; default: 100.0 )
			 * @type {number}
			 */
			public tint: number;
		}
	}
}