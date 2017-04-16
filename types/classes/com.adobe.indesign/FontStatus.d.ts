/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FontStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FAUXED. The font has been fauxed.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly fauxed: Adobe.Indesign.FontStatus;
			/**
			 * The font has been fauxed.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly FAUXED: Adobe.Indesign.FontStatus;
			/**
			 * Alias for INSTALLED. The font is installed.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly installed: Adobe.Indesign.FontStatus;
			/**
			 * The font is installed.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly INSTALLED: Adobe.Indesign.FontStatus;
			/**
			 * The font is not available.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly NOT_AVAILABLE: Adobe.Indesign.FontStatus;
			/**
			 * Alias for NOT_AVAILABLE. The font is not available.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly notAvailable: Adobe.Indesign.FontStatus;
			/**
			 * Alias for SUBSTITUTED. The font is a substitute.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly substituted: Adobe.Indesign.FontStatus;
			/**
			 * The font is a substitute.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly SUBSTITUTED: Adobe.Indesign.FontStatus;
			/**
			 * Alias for UNKNOWN. The font's status is unknown.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Indesign.FontStatus;
			/**
			 * The font's status is unknown.
			 * @type {Adobe.Indesign.FontStatus}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Indesign.FontStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}