/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EditLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CONCISE: Adobe.Photoshop.EditLogItemsType;
			public static readonly DETAILED: Adobe.Photoshop.EditLogItemsType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SESSIONONLY: Adobe.Photoshop.EditLogItemsType;
			/** Constructor */
			public constructor();
		}
	}
}