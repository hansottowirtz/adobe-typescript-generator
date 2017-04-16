/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResetTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ALLTOOLS: Adobe.Photoshop.ResetTarget;
			public static readonly ALLWARNINGS: Adobe.Photoshop.ResetTarget;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EVERYTHING: Adobe.Photoshop.ResetTarget;
			/** Constructor */
			public constructor();
		}
	}
}