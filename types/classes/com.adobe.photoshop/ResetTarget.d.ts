/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResetTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Tools. */
			public static readonly ALLTOOLS: Adobe.Photoshop.ResetTarget;
			/** Warning dialogs. */
			public static readonly ALLWARNINGS: Adobe.Photoshop.ResetTarget;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** All targets. */
			public static readonly EVERYTHING: Adobe.Photoshop.ResetTarget;
			/** Constructor */
			public constructor();
		}
	}
}