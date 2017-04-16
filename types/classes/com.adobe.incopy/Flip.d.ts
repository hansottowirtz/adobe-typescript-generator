/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Flip extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BOTH. Horizontal and vertical flip (same as rotate 
			 * 180)
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly both: Adobe.Incopy.Flip;
			/**
			 * Horizontal and vertical flip (same as rotate 180)
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly BOTH: Adobe.Incopy.Flip;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HORIZONTAL. Flips the printed image horizontally.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly horizontal: Adobe.Incopy.Flip;
			/**
			 * Flips the printed image horizontally.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly HORIZONTAL: Adobe.Incopy.Flip;
			/**
			 * Flips the printed image horizontally and vertically (same as 
			 * rotate 180).
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly HORIZONTAL_AND_VERTICAL: Adobe.Incopy.Flip;
			/**
			 * Alias for HORIZONTAL_AND_VERTICAL. Flips the printed image 
			 * horizontally and vertically (same as rotate 180).
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly horizontalAndVertical: Adobe.Incopy.Flip;
			/**
			 * Alias for NONE. The printed image is not flipped.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.Flip;
			/**
			 * The printed image is not flipped.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.Flip;
			/**
			 * Alias for VERTICAL. Flips the printed image vertically.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly vertical: Adobe.Incopy.Flip;
			/**
			 * Flips the printed image vertically.
			 * @type {Adobe.Incopy.Flip}
			 * @readonly
			 */
			public static readonly VERTICAL: Adobe.Incopy.Flip;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}