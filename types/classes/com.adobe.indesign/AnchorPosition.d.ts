/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnchorPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Place the anchored object above the line of text that 
			 * contains the object.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly ABOVE_LINE: Adobe.Indesign.AnchorPosition;
			/**
			 * Alias for ABOVE_LINE. Place the anchored object above the 
			 * line of text that contains the object.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly aboveLine: Adobe.Indesign.AnchorPosition;
			/**
			 * Alias for ANCHORED. Custom anchor position.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly anchored: Adobe.Indesign.AnchorPosition;
			/**
			 * Custom anchor position.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly ANCHORED: Adobe.Indesign.AnchorPosition;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object with the baseline of the line that 
			 * contains the object.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly INLINE_POSITION: Adobe.Indesign.AnchorPosition;
			/**
			 * Alias for INLINE_POSITION. Align the anchored object with 
			 * the baseline of the line that contains the object.
			 * @type {Adobe.Indesign.AnchorPosition}
			 * @readonly
			 */
			public static readonly inlinePosition: Adobe.Indesign.AnchorPosition;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}