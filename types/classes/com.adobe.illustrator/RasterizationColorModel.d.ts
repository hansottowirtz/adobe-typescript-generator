/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class RasterizationColorModel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.RasterizationColorModel}
			 * @readonly
			 */
			public static readonly BITMAP: Adobe.Illustrator.RasterizationColorModel;
			/**
			 * @type {Adobe.Illustrator.RasterizationColorModel}
			 * @readonly
			 */
			public static readonly DEFAULTCOLORMODEL: Adobe.Illustrator.RasterizationColorModel;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.RasterizationColorModel}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Illustrator.RasterizationColorModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}