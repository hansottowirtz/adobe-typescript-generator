/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RuleWidth extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Makes the rule the width of the column.
			 * @type {Adobe.Incopy.RuleWidth}
			 * @readonly
			 */
			public static readonly COLUMN_WIDTH: Adobe.Incopy.RuleWidth;
			/**
			 * Alias for COLUMN_WIDTH. Makes the rule the width of the 
			 * column.
			 * @type {Adobe.Incopy.RuleWidth}
			 * @readonly
			 */
			public static readonly columnWidth: Adobe.Incopy.RuleWidth;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Makes the paragraph rule above the width of the first line 
			 * of text in the paragraph.
			 * @type {Adobe.Incopy.RuleWidth}
			 * @readonly
			 */
			public static readonly TEXT_WIDTH: Adobe.Incopy.RuleWidth;
			/**
			 * Alias for TEXT_WIDTH. Makes the paragraph rule above the 
			 * width of the first line of text in the paragraph.
			 * @type {Adobe.Incopy.RuleWidth}
			 * @readonly
			 */
			public static readonly textWidth: Adobe.Incopy.RuleWidth;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}