/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ContentType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The frame is a graphics frame. */
			public static readonly GRAPHIC_TYPE: Adobe.Indesign.ContentType;
			/** Alias for GRAPHIC_TYPE. The frame is a graphics frame. */
			public static readonly graphicType: Adobe.Indesign.ContentType;
			/** The frame is a text frame. */
			public static readonly TEXT_TYPE: Adobe.Indesign.ContentType;
			/** Alias for TEXT_TYPE. The frame is a text frame. */
			public static readonly textType: Adobe.Indesign.ContentType;
			/** Alias for UNASSIGNED. No content type assigned. */
			public static readonly unassigned: Adobe.Indesign.ContentType;
			/** No content type assigned. */
			public static readonly UNASSIGNED: Adobe.Indesign.ContentType;
			/** Constructor */
			public constructor();
		}
	}
}