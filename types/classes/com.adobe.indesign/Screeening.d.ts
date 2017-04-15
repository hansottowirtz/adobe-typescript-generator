/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Screeening extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses custom screening settings for ink 
			 * angle and frequency. For information, see composite angle 
			 * and composite frequency.
			 */
			public static readonly custom: Adobe.Indesign.Screeening;
			/**
			 * Uses custom screening settings for ink angle and frequency. 
			 * For information, see composite angle and composite 
			 * frequency.
			 */
			public static readonly CUSTOM: Adobe.Indesign.Screeening;
			/** Uses the default screening settings. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.Screeening;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default screening 
			 * settings.
			 */
			public static readonly defaultValue: Adobe.Indesign.Screeening;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}