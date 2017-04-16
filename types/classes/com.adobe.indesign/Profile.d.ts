/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Profile extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No CMS profile is used. */
			public static readonly NO_CMS: Adobe.Indesign.Profile;
			/** Alias for NO_CMS. No CMS profile is used. */
			public static readonly noCms: Adobe.Indesign.Profile;
			/** Uses the PostScript CMS profile. */
			public static readonly POSTSCRIPT_CMS: Adobe.Indesign.Profile;
			/** Alias for POSTSCRIPT_CMS. Uses the PostScript CMS profile. */
			public static readonly postscriptCms: Adobe.Indesign.Profile;
			/** Uses the document profile. */
			public static readonly USE_DOCUMENT: Adobe.Indesign.Profile;
			/** Alias for USE_DOCUMENT. Uses the document profile. */
			public static readonly useDocument: Adobe.Indesign.Profile;
			/** Alias for WORKING. Uses the working profile. */
			public static readonly working: Adobe.Indesign.Profile;
			/** Uses the working profile. */
			public static readonly WORKING: Adobe.Indesign.Profile;
			/** Constructor */
			public constructor();
		}
	}
}