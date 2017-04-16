/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class RasterLinkState extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.RasterLinkState}
			 * @readonly
			 */
			public static readonly DATAFROMFILE: Adobe.Illustrator.RasterLinkState;
			/**
			 * @type {Adobe.Illustrator.RasterLinkState}
			 * @readonly
			 */
			public static readonly DATAMODIFIED: Adobe.Illustrator.RasterLinkState;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.RasterLinkState}
			 * @readonly
			 */
			public static readonly NODATA: Adobe.Illustrator.RasterLinkState;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}