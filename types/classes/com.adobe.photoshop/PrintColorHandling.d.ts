/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PrintColorHandling extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PHOTOSHOPMANAGED: Adobe.Photoshop.PrintColorHandling;
			public static readonly PRINTERMANAGED: Adobe.Photoshop.PrintColorHandling;
			public static readonly SEPARATIONS: Adobe.Photoshop.PrintColorHandling;
			/** Constructor */
			public constructor();
		}
	}
}