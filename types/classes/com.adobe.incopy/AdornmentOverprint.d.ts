/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AdornmentOverprint extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTO. Uses auto overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly auto: Adobe.Incopy.AdornmentOverprint;
			/**
			 * Uses auto overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly AUTO: Adobe.Incopy.AdornmentOverprint;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Turns off overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly OVERPRINT_OFF: Adobe.Incopy.AdornmentOverprint;
			/**
			 * Turns on overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly OVERPRINT_ON: Adobe.Incopy.AdornmentOverprint;
			/**
			 * Alias for OVERPRINT_OFF. Turns off overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly overprintOff: Adobe.Incopy.AdornmentOverprint;
			/**
			 * Alias for OVERPRINT_ON. Turns on overprint.
			 * @type {Adobe.Incopy.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly overprintOn: Adobe.Incopy.AdornmentOverprint;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}