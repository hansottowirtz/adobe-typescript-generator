/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Csxs extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.CsxsCSReview}
			 * @readonly
			 */
			public readonly csReview: Adobe.Premiere.CsxsCSReview;
			/**
			 * @type {Adobe.Premiere.CsxsResourceCentral}
			 * @readonly
			 */
			public readonly resourceCentral: Adobe.Premiere.CsxsResourceCentral;
		}
	}
}