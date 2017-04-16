/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BulletListExportOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * convert to text.
			 * @type {Adobe.Indesign.BulletListExportOption}
			 * @readonly
			 */
			public static readonly AS_TEXT: Adobe.Indesign.BulletListExportOption;
			/**
			 * Alias for AS_TEXT. convert to text.
			 * @type {Adobe.Indesign.BulletListExportOption}
			 * @readonly
			 */
			public static readonly asText: Adobe.Indesign.BulletListExportOption;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * map to html unordered list.
			 * @type {Adobe.Indesign.BulletListExportOption}
			 * @readonly
			 */
			public static readonly UNORDERED_LIST: Adobe.Indesign.BulletListExportOption;
			/**
			 * Alias for UNORDERED_LIST. map to html unordered list.
			 * @type {Adobe.Indesign.BulletListExportOption}
			 * @readonly
			 */
			public static readonly unorderedList: Adobe.Indesign.BulletListExportOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}