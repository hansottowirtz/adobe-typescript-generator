/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GIFOptionsPalette extends Adobe.Csawlib.CSEnumBase {
			/** Uses the adaptive (no dither) palette. */
			public static readonly ADAPTIVE_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Alias for ADAPTIVE_PALETTE. Uses the adaptive (no dither) 
			 * palette.
			 */
			public static readonly adaptivePalette: Adobe.Indesign.GIFOptionsPalette;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the Macintosh palette. */
			public static readonly MACINTOSH_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/** Alias for MACINTOSH_PALETTE. Uses the Macintosh palette. */
			public static readonly macintoshPalette: Adobe.Indesign.GIFOptionsPalette;
			/** Uses the Web palette. */
			public static readonly WEB_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/** Alias for WEB_PALETTE. Uses the Web palette. */
			public static readonly webPalette: Adobe.Indesign.GIFOptionsPalette;
			/** Uses the Windows palette. */
			public static readonly WINDOWS_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/** Alias for WINDOWS_PALETTE. Uses the Windows palette. */
			public static readonly windowsPalette: Adobe.Indesign.GIFOptionsPalette;
			/** Constructor */
			public constructor();
		}
	}
}