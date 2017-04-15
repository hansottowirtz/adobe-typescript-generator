/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Profile extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No CMS profile is used. */
			public static readonly NO_CMS: Adobe.Incopy.Profile;
			/** Alias for NO_CMS. No CMS profile is used. */
			public static readonly noCms: Adobe.Incopy.Profile;
			/** Uses the PostScript CMS profile. */
			public static readonly POSTSCRIPT_CMS: Adobe.Incopy.Profile;
			/** Alias for POSTSCRIPT_CMS. Uses the PostScript CMS profile. */
			public static readonly postscriptCms: Adobe.Incopy.Profile;
			/** Uses the document profile. */
			public static readonly USE_DOCUMENT: Adobe.Incopy.Profile;
			/** Alias for USE_DOCUMENT. Uses the document profile. */
			public static readonly useDocument: Adobe.Incopy.Profile;
			/** Alias for WORKING. Uses the working profile. */
			public static readonly working: Adobe.Incopy.Profile;
			/** Uses the working profile. */
			public static readonly WORKING: Adobe.Incopy.Profile;
			/** Constructor */
			public constructor();
		}
	}
}