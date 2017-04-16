/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FootnoteFirstBaseline extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The tallest character in the font falls below the top of the 
			 * footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly ASCENT_OFFSET: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for ASCENT_OFFSET. The tallest character in the font 
			 * falls below the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly ascentOffset: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * The tops of upper case letters touch the top of the footnote 
			 * container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly CAP_HEIGHT: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for CAP_HEIGHT. The tops of upper case letters touch 
			 * the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly capHeight: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * The em box height of the text defines the distance between 
			 * the baseline of the text and the top of the footnote 
			 * container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly EMBOX_HEIGHT: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for EMBOX_HEIGHT. The em box height of the text 
			 * defines the distance between the baseline of the text and 
			 * the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly emboxHeight: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The footnote minimum first baseline offset value defines the 
			 * distance between the baseline of the text and the top of the 
			 * footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly FIXED_HEIGHT: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for FIXED_HEIGHT. The footnote minimum first baseline 
			 * offset value defines the distance between the baseline of 
			 * the text and the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly fixedHeight: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * The leading value of the text defines the distance between 
			 * the baseline of the text and the top of the footnote 
			 * container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly LEADING_OFFSET: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for LEADING_OFFSET. The leading value of the text 
			 * defines the distance between the baseline of the text and 
			 * the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly leadingOffset: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * The tops of lower case letters without ascents, such as x, 
			 * touch the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly X_HEIGHT: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Alias for X_HEIGHT. The tops of lower case letters without 
			 * ascents, such as x, touch the top of the footnote container.
			 * @type {Adobe.Indesign.FootnoteFirstBaseline}
			 * @readonly
			 */
			public static readonly xHeight: Adobe.Indesign.FootnoteFirstBaseline;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}