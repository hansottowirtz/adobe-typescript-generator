/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FontStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FAUXED. The font has been fauxed.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly fauxed: Adobe.Incopy.FontStatus;
			/**
			 * The font has been fauxed.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly FAUXED: Adobe.Incopy.FontStatus;
			/**
			 * Alias for INSTALLED. The font is installed.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly installed: Adobe.Incopy.FontStatus;
			/**
			 * The font is installed.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly INSTALLED: Adobe.Incopy.FontStatus;
			/**
			 * The font is not available.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly NOT_AVAILABLE: Adobe.Incopy.FontStatus;
			/**
			 * Alias for NOT_AVAILABLE. The font is not available.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly notAvailable: Adobe.Incopy.FontStatus;
			/**
			 * Alias for SUBSTITUTED. The font is a substitute.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly substituted: Adobe.Incopy.FontStatus;
			/**
			 * The font is a substitute.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly SUBSTITUTED: Adobe.Incopy.FontStatus;
			/**
			 * Alias for UNKNOWN. The font's status is unknown.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Incopy.FontStatus;
			/**
			 * The font's status is unknown.
			 * @type {Adobe.Incopy.FontStatus}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Incopy.FontStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}