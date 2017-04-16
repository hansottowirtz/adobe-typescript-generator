/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoCADRasterFormat extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.AutoCADRasterFormat}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Illustrator.AutoCADRasterFormat;
			/**
			 * @type {Adobe.Illustrator.AutoCADRasterFormat}
			 * @readonly
			 */
			public static readonly PNG: Adobe.Illustrator.AutoCADRasterFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}