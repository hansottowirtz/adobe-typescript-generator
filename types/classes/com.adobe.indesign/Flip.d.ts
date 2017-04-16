/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Flip extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BOTH. Horizontal and vertical flip (same as rotate 
			 * 180)
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly both: Adobe.Indesign.Flip;
			/**
			 * Horizontal and vertical flip (same as rotate 180)
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly BOTH: Adobe.Indesign.Flip;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HORIZONTAL. Flips the printed image horizontally.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly horizontal: Adobe.Indesign.Flip;
			/**
			 * Flips the printed image horizontally.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly HORIZONTAL: Adobe.Indesign.Flip;
			/**
			 * Flips the printed image horizontally and vertically (same as 
			 * rotate 180).
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly HORIZONTAL_AND_VERTICAL: Adobe.Indesign.Flip;
			/**
			 * Alias for HORIZONTAL_AND_VERTICAL. Flips the printed image 
			 * horizontally and vertically (same as rotate 180).
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly horizontalAndVertical: Adobe.Indesign.Flip;
			/**
			 * Alias for NONE. The printed image is not flipped.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.Flip;
			/**
			 * The printed image is not flipped.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.Flip;
			/**
			 * Alias for VERTICAL. Flips the printed image vertically.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly vertical: Adobe.Indesign.Flip;
			/**
			 * Flips the printed image vertically.
			 * @type {Adobe.Indesign.Flip}
			 * @readonly
			 */
			public static readonly VERTICAL: Adobe.Indesign.Flip;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}