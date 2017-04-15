/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AdornmentOverprint extends Adobe.Csawlib.CSEnumBase {
			/** Alias for AUTO. Uses auto overprint. */
			public static readonly auto: Adobe.Indesign.AdornmentOverprint;
			/** Uses auto overprint. */
			public static readonly AUTO: Adobe.Indesign.AdornmentOverprint;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Turns off overprint. */
			public static readonly OVERPRINT_OFF: Adobe.Indesign.AdornmentOverprint;
			/** Turns on overprint. */
			public static readonly OVERPRINT_ON: Adobe.Indesign.AdornmentOverprint;
			/** Alias for OVERPRINT_OFF. Turns off overprint. */
			public static readonly overprintOff: Adobe.Indesign.AdornmentOverprint;
			/** Alias for OVERPRINT_ON. Turns on overprint. */
			public static readonly overprintOn: Adobe.Indesign.AdornmentOverprint;
			/** Constructor */
			public constructor();
		}
	}
}