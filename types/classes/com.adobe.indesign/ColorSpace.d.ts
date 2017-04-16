/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. CMYK.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Indesign.ColorSpace;
			/**
			 * CMYK.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Indesign.ColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LAB. LAB.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly lab: Adobe.Indesign.ColorSpace;
			/**
			 * LAB.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Indesign.ColorSpace;
			/**
			 * Alias for MIXEDINK. Mixed ink.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly mixedink: Adobe.Indesign.ColorSpace;
			/**
			 * Mixed ink.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly MIXEDINK: Adobe.Indesign.ColorSpace;
			/**
			 * Alias for RGB. RGB.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.ColorSpace;
			/**
			 * RGB.
			 * @type {Adobe.Indesign.ColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.ColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}