/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BlendingSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. Uses the CMYK profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Indesign.BlendingSpace;
			/**
			 * Uses the CMYK profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Indesign.BlendingSpace;
			/**
			 * Defaults to the current color profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.BlendingSpace;
			/**
			 * Alias for DEFAULT_VALUE. Defaults to the current color 
			 * profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.BlendingSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for RGB. Uses the RGB color profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.BlendingSpace;
			/**
			 * Uses the RGB color profile.
			 * @type {Adobe.Indesign.BlendingSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.BlendingSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}