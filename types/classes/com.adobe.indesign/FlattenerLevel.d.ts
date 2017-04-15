/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlattenerLevel extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HIGH. Keeps as much artwork as possible vector 
			 * data.
			 */
			public static readonly high: Adobe.Indesign.FlattenerLevel;
			/** Keeps as much artwork as possible vector data. */
			public static readonly HIGH: Adobe.Indesign.FlattenerLevel;
			/** Alias for LOW. Rasterizes all artwork. */
			public static readonly low: Adobe.Indesign.FlattenerLevel;
			/** Rasterizes all artwork. */
			public static readonly LOW: Adobe.Indesign.FlattenerLevel;
			/** Alias for MEDIUM. Rasterizes a medium amount of artwork. */
			public static readonly medium: Adobe.Indesign.FlattenerLevel;
			/** Rasterizes a medium amount of artwork. */
			public static readonly MEDIUM: Adobe.Indesign.FlattenerLevel;
			/** Rasterizes more than a medium amount of artwork. */
			public static readonly MEDIUM_HIGH: Adobe.Indesign.FlattenerLevel;
			/** Rasterizes almost all artwork. */
			public static readonly MEDIUM_LOW: Adobe.Indesign.FlattenerLevel;
			/**
			 * Alias for MEDIUM_HIGH. Rasterizes more than a medium amount 
			 * of artwork.
			 */
			public static readonly mediumHigh: Adobe.Indesign.FlattenerLevel;
			/** Alias for MEDIUM_LOW. Rasterizes almost all artwork. */
			public static readonly mediumLow: Adobe.Indesign.FlattenerLevel;
			/** Constructor */
			public constructor();
		}
	}
}