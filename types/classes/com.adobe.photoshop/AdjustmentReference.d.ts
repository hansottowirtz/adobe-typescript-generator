/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AdjustmentReference extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ABSOLUTE: Adobe.Photoshop.AdjustmentReference;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly RELATIVE: Adobe.Photoshop.AdjustmentReference;
			/** Constructor */
			public constructor();
		}
	}
}