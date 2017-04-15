/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AdornmentOverprint extends Adobe.Csawlib.CSEnumBase {
			/** Alias for AUTO. Uses auto overprint. */
			public static readonly auto: Adobe.Incopy.AdornmentOverprint;
			/** Uses auto overprint. */
			public static readonly AUTO: Adobe.Incopy.AdornmentOverprint;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Turns off overprint. */
			public static readonly OVERPRINT_OFF: Adobe.Incopy.AdornmentOverprint;
			/** Turns on overprint. */
			public static readonly OVERPRINT_ON: Adobe.Incopy.AdornmentOverprint;
			/** Alias for OVERPRINT_OFF. Turns off overprint. */
			public static readonly overprintOff: Adobe.Incopy.AdornmentOverprint;
			/** Alias for OVERPRINT_ON. Turns on overprint. */
			public static readonly overprintOn: Adobe.Incopy.AdornmentOverprint;
			/** Constructor */
			public constructor();
		}
	}
}