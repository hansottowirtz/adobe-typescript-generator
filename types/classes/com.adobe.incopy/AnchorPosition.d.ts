/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AnchorPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Place the anchored object above the line of text that 
			 * contains the object.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly ABOVE_LINE: Adobe.Incopy.AnchorPosition;
			/**
			 * Alias for ABOVE_LINE. Place the anchored object above the 
			 * line of text that contains the object.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly aboveLine: Adobe.Incopy.AnchorPosition;
			/**
			 * Alias for ANCHORED. Custom anchor position.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly anchored: Adobe.Incopy.AnchorPosition;
			/**
			 * Custom anchor position.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly ANCHORED: Adobe.Incopy.AnchorPosition;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object with the baseline of the line that 
			 * contains the object.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly INLINE_POSITION: Adobe.Incopy.AnchorPosition;
			/**
			 * Alias for INLINE_POSITION. Align the anchored object with 
			 * the baseline of the line that contains the object.
			 * @type {Adobe.Incopy.AnchorPosition}
			 * @readonly
			 */
			public static readonly inlinePosition: Adobe.Incopy.AnchorPosition;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}