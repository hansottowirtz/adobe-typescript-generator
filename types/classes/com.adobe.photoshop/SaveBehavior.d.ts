/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveBehavior extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Always save the item with the file. */
			public static readonly ALWAYSSAVE: Adobe.Photoshop.SaveBehavior;
			/** Prompt the user whether to save the item with the file. */
			public static readonly ASKWHENSAVING: Adobe.Photoshop.SaveBehavior;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Never save the item with the file. */
			public static readonly NEVERSAVE: Adobe.Photoshop.SaveBehavior;
			/** Constructor */
			public constructor();
		}
	}
}