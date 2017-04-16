/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintFontDownloadMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrintFontDownloadMode}
			 * @readonly
			 */
			public static readonly DOWNLOADCOMPLETE: Adobe.Illustrator.PrintFontDownloadMode;
			/**
			 * @type {Adobe.Illustrator.PrintFontDownloadMode}
			 * @readonly
			 */
			public static readonly DOWNLOADNONE: Adobe.Illustrator.PrintFontDownloadMode;
			/**
			 * @type {Adobe.Illustrator.PrintFontDownloadMode}
			 * @readonly
			 */
			public static readonly DOWNLOADSUBSET: Adobe.Illustrator.PrintFontDownloadMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}