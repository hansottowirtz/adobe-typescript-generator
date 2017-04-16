/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DCSType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly COLORCOMPOSITE: Adobe.Photoshop.DCSType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALECOMPOSITE: Adobe.Photoshop.DCSType;
			public static readonly NOCOMPOSITE: Adobe.Photoshop.DCSType;
			/** Constructor */
			public constructor();
		}
	}
}