/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SelectionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly DIMINISH: Adobe.Photoshop.SelectionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EXTEND: Adobe.Photoshop.SelectionType;
			public static readonly INTERSECT: Adobe.Photoshop.SelectionType;
			public static readonly REPLACE: Adobe.Photoshop.SelectionType;
			/** Constructor */
			public constructor();
		}
	}
}