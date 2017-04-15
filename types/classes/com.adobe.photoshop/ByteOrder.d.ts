/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ByteOrder extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** IBM PC. */
			public static readonly IBM: Adobe.Photoshop.ByteOrder;
			/** Mac OS. */
			public static readonly MACOS: Adobe.Photoshop.ByteOrder;
			/** Constructor */
			public constructor();
		}
	}
}