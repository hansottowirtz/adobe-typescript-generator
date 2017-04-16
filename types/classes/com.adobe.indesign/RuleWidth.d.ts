/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RuleWidth extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Makes the rule the width of the column.
			 * @type {Adobe.Indesign.RuleWidth}
			 * @readonly
			 */
			public static readonly COLUMN_WIDTH: Adobe.Indesign.RuleWidth;
			/**
			 * Alias for COLUMN_WIDTH. Makes the rule the width of the 
			 * column.
			 * @type {Adobe.Indesign.RuleWidth}
			 * @readonly
			 */
			public static readonly columnWidth: Adobe.Indesign.RuleWidth;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Makes the paragraph rule above the width of the first line 
			 * of text in the paragraph.
			 * @type {Adobe.Indesign.RuleWidth}
			 * @readonly
			 */
			public static readonly TEXT_WIDTH: Adobe.Indesign.RuleWidth;
			/**
			 * Alias for TEXT_WIDTH. Makes the paragraph rule above the 
			 * width of the first line of text in the paragraph.
			 * @type {Adobe.Indesign.RuleWidth}
			 * @readonly
			 */
			public static readonly textWidth: Adobe.Indesign.RuleWidth;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}