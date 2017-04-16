/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveBehavior extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ALWAYSSAVE: Adobe.Photoshop.SaveBehavior;
			public static readonly ASKWHENSAVING: Adobe.Photoshop.SaveBehavior;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NEVERSAVE: Adobe.Photoshop.SaveBehavior;
			/** Constructor */
			public constructor();
		}
	}
}