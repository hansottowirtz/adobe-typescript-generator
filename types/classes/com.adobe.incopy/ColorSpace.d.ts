/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. CMYK.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Incopy.ColorSpace;
			/**
			 * CMYK.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Incopy.ColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LAB. LAB.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly lab: Adobe.Incopy.ColorSpace;
			/**
			 * LAB.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Incopy.ColorSpace;
			/**
			 * Alias for MIXEDINK. Mixed ink.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly mixedink: Adobe.Incopy.ColorSpace;
			/**
			 * Mixed ink.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly MIXEDINK: Adobe.Incopy.ColorSpace;
			/**
			 * Alias for RGB. RGB.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Incopy.ColorSpace;
			/**
			 * RGB.
			 * @type {Adobe.Incopy.ColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Incopy.ColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}