/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ByteOrder extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly IBM: Adobe.Photoshop.ByteOrder;
			public static readonly MACOS: Adobe.Photoshop.ByteOrder;
			/** Constructor */
			public constructor();
		}
	}
}