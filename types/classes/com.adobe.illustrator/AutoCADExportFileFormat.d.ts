/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoCADExportFileFormat extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.AutoCADExportFileFormat}
			 * @readonly
			 */
			public static readonly DWG: Adobe.Illustrator.AutoCADExportFileFormat;
			/**
			 * @type {Adobe.Illustrator.AutoCADExportFileFormat}
			 * @readonly
			 */
			public static readonly DXF: Adobe.Illustrator.AutoCADExportFileFormat;
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