/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentPreviewMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.DocumentPreviewMode}
			 * @readonly
			 */
			public static readonly DefaultPreview: Adobe.Illustrator.DocumentPreviewMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DocumentPreviewMode}
			 * @readonly
			 */
			public static readonly OverprintPreview: Adobe.Illustrator.DocumentPreviewMode;
			/**
			 * @type {Adobe.Illustrator.DocumentPreviewMode}
			 * @readonly
			 */
			public static readonly PixelPreview: Adobe.Illustrator.DocumentPreviewMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}