/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintingBounds extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrintingBounds}
			 * @readonly
			 */
			public static readonly ARTBOARDBOUNDS: Adobe.Illustrator.PrintingBounds;
			/**
			 * @type {Adobe.Illustrator.PrintingBounds}
			 * @readonly
			 */
			public static readonly ARTWORKBOUNDS: Adobe.Illustrator.PrintingBounds;
			/**
			 * @type {Adobe.Illustrator.PrintingBounds}
			 * @readonly
			 */
			public static readonly CROPBOUNDS: Adobe.Illustrator.PrintingBounds;
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