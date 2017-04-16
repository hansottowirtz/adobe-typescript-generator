/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintTiling extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrintTiling}
			 * @readonly
			 */
			public static readonly TILEFULLPAGES: Adobe.Illustrator.PrintTiling;
			/**
			 * @type {Adobe.Illustrator.PrintTiling}
			 * @readonly
			 */
			public static readonly TILEIMAGEABLEAREAS: Adobe.Illustrator.PrintTiling;
			/**
			 * @type {Adobe.Illustrator.PrintTiling}
			 * @readonly
			 */
			public static readonly TILESINGLEFULLPAGE: Adobe.Illustrator.PrintTiling;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}