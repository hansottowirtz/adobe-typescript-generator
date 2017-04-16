/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpaceUnitType extends Adobe.Csawlib.CSEnumBase {
			/** em unit. */
			public static readonly CSS_EM: Adobe.Indesign.SpaceUnitType;
			/** pixel unit. */
			public static readonly CSS_PIXEL: Adobe.Indesign.SpaceUnitType;
			/**
			 * Alias for CSS_EM.
			 *  em unit.
			 */
			public static readonly cssEm: Adobe.Indesign.SpaceUnitType;
			/**
			 * Alias for CSS_PIXEL.
			 *  pixel unit.
			 */
			public static readonly cssPixel: Adobe.Indesign.SpaceUnitType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}