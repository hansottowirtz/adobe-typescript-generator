/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class GradientsPreservePolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.GradientsPreservePolicy}
			 * @readonly
			 */
			public static readonly AUTOMATICALLYCONVERTGRADIENTS: Adobe.Illustrator.GradientsPreservePolicy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.GradientsPreservePolicy}
			 * @readonly
			 */
			public static readonly KEEPGRADIENTSEDITABLE: Adobe.Illustrator.GradientsPreservePolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}