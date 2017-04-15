/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EditLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Save a concise history log. */
			public static readonly CONCISE: Adobe.Photoshop.EditLogItemsType;
			/** Save a detailed history log. */
			public static readonly DETAILED: Adobe.Photoshop.EditLogItemsType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Save a history for only for the session. */
			public static readonly SESSIONONLY: Adobe.Photoshop.EditLogItemsType;
			/** Constructor */
			public constructor();
		}
	}
}