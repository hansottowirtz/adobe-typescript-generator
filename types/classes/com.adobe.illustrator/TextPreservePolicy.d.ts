/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.TextPreservePolicy}
			 * @readonly
			 */
			public static readonly AUTOMATICALLYCONVERTTEXT: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.TextPreservePolicy}
			 * @readonly
			 */
			public static readonly KEEPTEXTEDITABLE: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * @type {Adobe.Illustrator.TextPreservePolicy}
			 * @readonly
			 */
			public static readonly OUTLINETEXT: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * @type {Adobe.Illustrator.TextPreservePolicy}
			 * @readonly
			 */
			public static readonly RASTERIZETEXT: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}