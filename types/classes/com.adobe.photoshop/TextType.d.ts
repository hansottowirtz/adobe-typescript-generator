/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of text. */
		class TextType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Text that wraps within a bounding box. */
			public static readonly PARAGRAPHTEXT: Adobe.Photoshop.TextType;
			/** Text that does not wrap. */
			public static readonly POINTTEXT: Adobe.Photoshop.TextType;
			/** Constructor */
			public constructor();
		}
	}
}