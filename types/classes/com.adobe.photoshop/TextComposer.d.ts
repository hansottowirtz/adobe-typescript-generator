/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextComposer extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ADOBEEVERYLINE: Adobe.Photoshop.TextComposer;
			public static readonly ADOBESINGLELINE: Adobe.Photoshop.TextComposer;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}