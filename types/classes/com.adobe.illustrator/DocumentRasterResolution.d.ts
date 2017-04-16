/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentRasterResolution extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DocumentRasterResolution}
			 * @readonly
			 */
			public static readonly HighResolution: Adobe.Illustrator.DocumentRasterResolution;
			/**
			 * @type {Adobe.Illustrator.DocumentRasterResolution}
			 * @readonly
			 */
			public static readonly MediumResolution: Adobe.Illustrator.DocumentRasterResolution;
			/**
			 * @type {Adobe.Illustrator.DocumentRasterResolution}
			 * @readonly
			 */
			public static readonly ScreenResolution: Adobe.Illustrator.DocumentRasterResolution;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}