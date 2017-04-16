/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PurgeTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ALLCACHES: Adobe.Photoshop.PurgeTarget;
			public static readonly CLIPBOARDCACHE: Adobe.Photoshop.PurgeTarget;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly HISTORYCACHES: Adobe.Photoshop.PurgeTarget;
			public static readonly UNDOCACHES: Adobe.Photoshop.PurgeTarget;
			/** Constructor */
			public constructor();
		}
	}
}