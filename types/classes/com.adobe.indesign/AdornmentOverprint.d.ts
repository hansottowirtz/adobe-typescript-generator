/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AdornmentOverprint extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTO. Uses auto overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly auto: Adobe.Indesign.AdornmentOverprint;
			/**
			 * Uses auto overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly AUTO: Adobe.Indesign.AdornmentOverprint;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Turns off overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly OVERPRINT_OFF: Adobe.Indesign.AdornmentOverprint;
			/**
			 * Turns on overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly OVERPRINT_ON: Adobe.Indesign.AdornmentOverprint;
			/**
			 * Alias for OVERPRINT_OFF. Turns off overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly overprintOff: Adobe.Indesign.AdornmentOverprint;
			/**
			 * Alias for OVERPRINT_ON. Turns on overprint.
			 * @type {Adobe.Indesign.AdornmentOverprint}
			 * @readonly
			 */
			public static readonly overprintOn: Adobe.Indesign.AdornmentOverprint;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}