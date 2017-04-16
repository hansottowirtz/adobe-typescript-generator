/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FiltersPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.FiltersPreservePolicy}
			 * @readonly
			 */
			public static readonly EXPANDFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/**
			 * @type {Adobe.Illustrator.FiltersPreservePolicy}
			 * @readonly
			 */
			public static readonly KEEPFILTERSEDITABLE: Adobe.Illustrator.FiltersPreservePolicy;
			/**
			 * @type {Adobe.Illustrator.FiltersPreservePolicy}
			 * @readonly
			 */
			public static readonly RASTERIZEFILTERS: Adobe.Illustrator.FiltersPreservePolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}