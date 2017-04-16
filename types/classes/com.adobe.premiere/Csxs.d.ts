/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Csxs extends Adobe.Csawlib.CSHostObject {
			public readonly csReview: Adobe.Premiere.CsxsCSReview;
			public readonly resourceCentral: Adobe.Premiere.CsxsResourceCentral;
		}
	}
}