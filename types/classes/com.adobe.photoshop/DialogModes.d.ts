/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DialogModes extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Show all dialogs. */
			public static readonly ALL: Adobe.Photoshop.DialogModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Show only dialogs related to errors. */
			public static readonly ERROR: Adobe.Photoshop.DialogModes;
			/** Show no dialogs. */
			public static readonly NO: Adobe.Photoshop.DialogModes;
			/** Constructor */
			public constructor();
		}
	}
}