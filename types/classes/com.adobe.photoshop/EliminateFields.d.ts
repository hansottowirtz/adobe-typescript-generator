/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EliminateFields extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EVENFIELDS: Adobe.Photoshop.EliminateFields;
			public static readonly ODDFIELDS: Adobe.Photoshop.EliminateFields;
			/** Constructor */
			public constructor();
		}
	}
}