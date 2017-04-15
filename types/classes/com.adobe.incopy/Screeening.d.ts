/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Screeening extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses custom screening settings for ink 
			 * angle and frequency. For information, see composite angle 
			 * and composite frequency.
			 */
			public static readonly custom: Adobe.Incopy.Screeening;
			/**
			 * Uses custom screening settings for ink angle and frequency. 
			 * For information, see composite angle and composite 
			 * frequency.
			 */
			public static readonly CUSTOM: Adobe.Incopy.Screeening;
			/** Uses the default screening settings. */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.Screeening;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default screening 
			 * settings.
			 */
			public static readonly defaultValue: Adobe.Incopy.Screeening;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}