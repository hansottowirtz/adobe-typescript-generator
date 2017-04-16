/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GIFOptionsPalette extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the adaptive (no dither) palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly ADAPTIVE_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Alias for ADAPTIVE_PALETTE. Uses the adaptive (no dither) 
			 * palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly adaptivePalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the Macintosh palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly MACINTOSH_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Alias for MACINTOSH_PALETTE. Uses the Macintosh palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly macintoshPalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Uses the Web palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly WEB_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Alias for WEB_PALETTE. Uses the Web palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly webPalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Uses the Windows palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly WINDOWS_PALETTE: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Alias for WINDOWS_PALETTE. Uses the Windows palette.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 * @readonly
			 */
			public static readonly windowsPalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}